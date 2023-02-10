export default class DragonTest {
  static addedRockets() {
    const response = {
      data: [
        {
          id: 1,
          flickrImage: 'images',
          dragonName: 'Falcon 1',
          description: 'Life of man depends on him',
          reserved: false,
        },
        {
          id: 2,
          flickrImage: 'images',
          dragonName: 'Falcon 9',
          description: 'Never give up on your dream',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
