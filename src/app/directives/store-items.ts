export interface StoreItem {
  id: number;
  imageName: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
}

const STORE_ITEMS_SUMMER: StoreItem[] = [
  { id: 1, imageName: '1.jpg', season: 'summer' },
  { id: 2, imageName: '2.jpg', season: 'summer' },
  { id: 3, imageName: '3.jpg', season: 'summer' },
  { id: 4, imageName: '4.jpg', season: 'summer' },
  { id: 5, imageName: '5.jpg', season: 'summer' },
  { id: 6, imageName: '6.jpg', season: 'summer' },
  { id: 7, imageName: '7.jpg', season: 'summer' },
  { id: 8, imageName: '8.jpg', season: 'summer' },
  { id: 9, imageName: '9.jpg', season: 'summer' },
  { id: 10, imageName: '10.jpg', season: 'summer' },
  { id: 11, imageName: '11.jpg', season: 'summer' },
  { id: 12, imageName: '12.jpg', season: 'summer' },
  { id: 13, imageName: '13.jpg', season: 'summer' },
  { id: 14, imageName: '14.jpg', season: 'summer' },
];

export const STORE_ITEMS: StoreItem[] = [...STORE_ITEMS_SUMMER];
