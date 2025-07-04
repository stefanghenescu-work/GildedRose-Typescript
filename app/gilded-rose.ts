export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

enum Items {
    AgedBrie = 'Aged Brie',
    BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
    Sulfuras = 'Sulfuras, Hand of Ragnaros'
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            var itemName: string = this.items[i].name;
            var itemSellIn: number = this.items[i].sellIn;
            var itemQuality: number = this.items[i].quality;

            if (itemName != Items.AgedBrie && itemName != Items.BackstagePasses
                && itemName != Items.Sulfuras) {
                // basic items

                if (itemQuality > 0)
                    if (itemSellIn < 0)
                        itemQuality = itemQuality - 2;
                    else
                        itemQuality--;

            } else if (itemName == Items.BackstagePasses) {
                // increase quality depending on sell in
                // for case when quality > 50 from the beginning, it stays the same
                
                if (itemQuality < 50) {
                    if (itemSellIn <= 0)
                        itemQuality = 0;
                    else if (itemSellIn <= 5)
                        itemQuality += 3;
                    else if (itemSellIn <= 10)
                        itemQuality += 2;
                    else
                        itemQuality++;

                    itemQuality = Math.min(itemQuality, 50);
                }
            } else if (itemQuality < 50) {
               itemQuality++;
            }
            
            
            if (itemName != Items.Sulfuras) {
                itemSellIn = itemSellIn - 1;
            }
            
            
            if (itemSellIn < 0) {
                if (itemName != Items.AgedBrie) {
                    if (itemName != Items.BackstagePasses) {
                        if (itemQuality > 0) {
                            if (itemName != Items.Sulfuras) {
                                itemQuality = itemQuality - 1
                            }
                        }
                    } else {
                        itemQuality = 0;
                    }
                } else {
                    if (itemQuality < 50) {
                        itemQuality = itemQuality + 1
                    }
                }
            }
            this.items[i].quality = itemQuality;
            this.items[i].sellIn = itemSellIn;
        }

        return this.items;
    }
}
