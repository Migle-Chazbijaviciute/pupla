class TypeViewModel {
  constructor(typeModel) {
    this.id = typeModel._id;
    this.title = typeModel.title;
    this.createdAt = typeModel.createdAt;
    this.updatedAt = typeModel.updatedAt;
  }
}

module.exports = TypeViewModel;
