class ColorViewModel {
  constructor(colorModel) {
    this.id = colorModel._id;
    this.title = colorModel.title;
    this.createdAt = colorModel.createdAt;
    this.updatedAt = colorModel.updatedAt;
  }
}

module.exports = ColorViewModel;
