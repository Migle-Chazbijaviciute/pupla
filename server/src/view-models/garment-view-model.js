const ColorViewModel = require('./color-view-model');
const CategoryViewModel = require('./category-view-model');
const SizeViewModel = require('./size-view-model');
const ImageViewModel = require('./image-view-model');

class GarmentViewModel {
  constructor({ _id, label, price, color, category, sizes, images, limitedEdition, inStock, createdAt, updatedAt }) {
    this.id = _id;
    this.label = label;
    this.price = price;
    this.color = new ColorViewModel(color);
    this.category = new CategoryViewModel(category);
    this.sizes = sizes.map(size => new SizeViewModel(size));
    this.images = images.map(img => new ImageViewModel(img));
    this.limitedEdition = limitedEdition;
    this.inStock = inStock;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = GarmentViewModel;
