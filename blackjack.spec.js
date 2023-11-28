describe('Tests for the Blackjack.spec.js',() =>{
    describe('Tests for calc points method',() =>{
        describe ('No ace test case',() =>{
            it('should calculate the score of a hand',() =>{
                const hand = [
                    {displayVal:'six', val:1, suit:'hearts'},
                    {displayVal:'seven', val:7, suit:'hearts'}
                ]
                const result = calcPoints(hand);
                expect (result.total).toEqual(8);
                expect(result.isSoft).toEqual(false);
            });
        })
        // ---------
        describe('1 ace test case ',() =>{
            it('should return issoft: false',() =>{
                const hand = [
                    {displayVal:'Ace', val:11, suit:'spade'},
                    {displayVal:'King', val:10, suit:'hearts'},
                    {displayVal:'King', val:10, suit:'hearts'},
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(21);
                expect(result.isSoft).toEqual(false)
            })
        })
        describe('Multiple  ace test case ',() =>{
            it('should return issoft: false',() =>{
                const hand = [
                    {displayVal:'10', val:10, suit:'spade'},
                    {displayVal:'Ace', val:11, suit:'spade'},
                    {displayVal:'Ace', val:11, suit:'spade'}
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(12);
                expect(result.isSoft).toEqual(false)
            })
        })
        describe('1 ace test case ',() =>{
            it('should return issoft: true',() =>{
                const hand = [
                    {displayVal:'Ace', val:11, suit:'spade'},
                    {displayVal:'8', val:8, suit:'hearts'},
  
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(19);
                expect(result.isSoft).toEqual(true)
            })
        })
         describe(' Multiple ace test case ',() =>{
            it('should return issoft: true',() =>{
                const hand = [
                    {displayVal:'6', val:6, suit:'hearts'},
                    {displayVal:'Ace', val:11, suit:'spade'},
                    {displayVal:'Ace', val:11, suit:'spade'},
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(18);
                expect(result.isSoft).toEqual(true)
            })
        })
    })
    
});