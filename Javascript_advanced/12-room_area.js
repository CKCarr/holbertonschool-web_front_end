let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};
let BoundGetArea = roomDimensions.getArea.bind(roomDimensions);
BoundGetArea();
