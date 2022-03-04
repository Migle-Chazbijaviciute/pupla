const GarmentModel = require( '../models/garment-model' );
const GarmentViewModel = require( '../view-models/garment-view-model' );
const ImageModel = require( '../models/image-model' );
const { deleteFile } = require( '../helpers/file-helpers' );

const getGarments = async ( req, res ) => {
  const garmentDocs = await GarmentModel.find()
    .populate( 'color' )
    .populate( 'category' )
    .populate( 'sizes' )
    .populate( 'images' );
  const garment = garmentDocs.map( garment => new GarmentViewModel( garment ) );
  res.status( 200 ).json( { garment: garment } );
};

const createGarment = async ( req, res ) => {
  const { label, color, category, price, sizes, images, limitedEdition, inStock } = req.body;
  const garmentDocs = await GarmentModel( {
    label, color, category, price, sizes, images, limitedEdition, inStock
  } );

  try {
    await garmentDocs.save();
    const garment = new GarmentViewModel( garmentDocs );
    res.status( 200 ).json( garment );
  } catch ( error ) {
    console.log( error );
    res.status( 400 ).json( {
      message: `Garment '${label}' already exists`
    } );
  }
};

const getGarment = async ( req, res ) => {
  const { id } = req.params;
  try {
    const garmentDocs = await GarmentModel.findById( id )
      .populate( 'color' )
      .populate( 'category' )
      .populate( 'sizes' )
      .populate( 'images' );
    const garment = new GarmentViewModel( garmentDocs );
    res.status( 200 ).json( garment );
  } catch ( error ) {
    res.status( 404 ).json( {
      message: `Element with id: '${id}' was not found`
    } );
  }
};

const deleteGarment = async ( req, res ) => {
  const { id } = req.params;
  try {
    const garmentDoc = await GarmentModel.findById( id );
    const imagesIds = garmentDoc.images;

    const imagesDocs = await Promise.all(
      imagesIds.map( ( imgId ) => {
        const singledoc = ImageModel.findById( imgId );
        return singledoc;
      }
      ) );

    const { PUBLIC_PATH, IMG_FOLDER_NAME } = process.env;
    const imagesPathsArr = imagesDocs.map( ( { src } ) => `${PUBLIC_PATH}/${IMG_FOLDER_NAME}/${src}` );

    imagesPathsArr.forEach( ( path ) => {
      try {
        deleteFile( path );
      } catch ( error ) {
        console.log( 'Nuotrauku trynimo klaida:', error );
      }
    } );

    imagesDocs.forEach( ( imageDoc ) => imageDoc.delete() );

    await garmentDoc.delete();

    res.status( 200 ).send( {
      message: 'Product successfully deleted',
      id
    } );
  } catch ( error ) {
    console.log( error );
    res.status( 500 ).json( {
      message: `Element with id: '${id}' was not found`
    } );
  }
};

const updateGarment = async ( req, res ) => {
  const { id } = req.params;
  console.log( req.params );
  console.log( req.body );
  const { label, color, category, price, sizes, inStock, limitedEdition, images } = req.body;
  try {
    await GarmentModel.findById( id )
      .populate( 'color' )
      .populate( 'category' )
      .populate( 'sizes' )
      .populate( 'images' );
    try {
      const garmentDocs = await GarmentModel.findByIdAndUpdate(
        id,
        { label, color, category, price, sizes, inStock, limitedEdition, images },
        { new: true }
      );
      const garment = new GarmentViewModel( garmentDocs );
      res.status( 200 ).json( garment );
    } catch ( error ) {
      res.status( 400 ).json( { message: 'Invalid parameters' } );
    }

  } catch ( error ) {
    res.status( 404 ).json( { message: 'This clothe does not exist' } );
  }
};

module.exports = {
  getGarments,
  createGarment,
  getGarment,
  deleteGarment,
  updateGarment
};
