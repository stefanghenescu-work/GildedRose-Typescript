import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from 'chai';

// Add a master test here

describe('Gilded Rose', function () {

    // basic test
    it('basic test', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 3, 5), 
                                            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                                            new Item('Backstage passes to a TAFKAL80ETC concert', 16, 12)
         ]);
        var items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
        expect(items[0].sellIn).to.equal(2);

        expect(items[1].quality).to.equal(80);
        expect(items[1].sellIn).to.equal(0);

        expect(items[2].quality).to.equal(13);
        expect(items[2].sellIn).to.equal(15);

        // second update
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
        expect(items[0].sellIn).to.equal(1);

        expect(items[1].quality).to.equal(80);
        expect(items[1].sellIn).to.equal(0);

        expect(items[2].quality).to.equal(14);
        expect(items[2].sellIn).to.equal(14);

    });


    // quality over 50
    it('quality over 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 52) ]);
        var items = gildedRose.updateQuality();
        
        expect(items[0].quality).to.equal(52);

        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(52);
    });


    // quality under 50
    it('quality under 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 47) ]);
        var items = gildedRose.updateQuality();
        
        expect(items[0].quality).to.equal(50);

        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });


    // negative quality
    // this is not verified in code but the requirement is: the quality of an item is never negative
    it('negative quality', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 4, -10) ]);
        var items = gildedRose.updateQuality();
        
        expect(items[0].quality).to.equal(-9);
    });


    // quality over 50 for Sulfuras
     it('quality over 50 Sulfuras', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 2, 80) ]);
        var items = gildedRose.updateQuality();
        
        expect(items[0].quality).to.equal(80);

        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
    });
    
    
    // item that is not special
    it('basic items', function() {
        const gildedRose = new GildedRose([ new Item('Pizza', 3, 5), 
                                            new Item('Pasta', 1, 20),
                                            new Item('Burger', 16, 12)
         ]);

        var items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(4);
        expect(items[0].sellIn).to.equal(2);

        expect(items[1].quality).to.equal(19);
        expect(items[1].sellIn).to.equal(0);

        expect(items[2].quality).to.equal(11);
        expect(items[2].sellIn).to.equal(15);

        // second update
        items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
        expect(items[0].sellIn).to.equal(1);

        expect(items[1].quality).to.equal(17);
        expect(items[1].sellIn).to.equal(-1);

        expect(items[2].quality).to.equal(10);
        expect(items[2].sellIn).to.equal(14);

    });


    // backstage passes in the last days (10 or less then 5 days)
     it('backstage passes last days', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 16, 17),
                                            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20),
                                            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 9),
                                            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 15)
        ]);

        var items = gildedRose.updateQuality();

        expect(items[0].quality).to.equal(18);
        expect(items[0].sellIn).to.equal(15);

        expect(items[1].quality).to.equal(21);
        expect(items[1].sellIn).to.equal(10);

        expect(items[2].quality).to.equal(11);
        expect(items[2].sellIn).to.equal(5);

        expect(items[3].quality).to.equal(0);
        expect(items[3].sellIn).to.equal(-1);

        // second update
        items = gildedRose.updateQuality();
        
        expect(items[0].quality).to.equal(19);
        expect(items[0].sellIn).to.equal(14);

        expect(items[1].quality).to.equal(23);
        expect(items[1].sellIn).to.equal(9);

        expect(items[2].quality).to.equal(14);
        expect(items[2].sellIn).to.equal(4);

        expect(items[3].quality).to.equal(0);
        expect(items[3].sellIn).to.equal(-2);

    });

});
