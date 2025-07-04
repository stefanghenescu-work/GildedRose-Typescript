import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from 'chai';

// Add a master test here

describe('Gilded Rose', function () {

    it('golden master test', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 5), 
                                            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
                                            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 12)
         ]);
        const items = gildedRose.updateQuality();
        //expect(items[0].name).to.equal('fixme');
        expect(items[2].quality).to.equal(3);
    });


    // quality over 50


    // basic test


    // negative quality


    // quality over 50 for Sulfuras
    
    
    // item that is not special


    // 

});
