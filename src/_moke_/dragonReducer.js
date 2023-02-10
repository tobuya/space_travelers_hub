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
        {
          id: 3,
          flickrImage: 'images',
          dragonName: 'Falcon Heavy',
          description: 'Nobody else will do it for you',
          reserved: false,
        },
        {
          id: 4,
          flickrImage: 'images',
          dragonName: 'Starship',
          description: 'easy taske done today',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
