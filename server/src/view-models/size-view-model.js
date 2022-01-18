class SizeViewModel {
  constructor(sizeModel) {
    this.id = sizeModel._id;
    this.title = sizeModel.title;
    this.createdAt = sizeModel.createdAt;
    this.updatedAt = sizeModel.updatedAt;
  }
};

module.exports = SizeViewModel;
