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
        describe('I ace test case ',() =>{
            it('should return issoft: true',() =>{
                const hand = [
                    {displayVal:'jack', val:10, suit:'hearts'},
                    {displayVal:'ace', val:11, suit:'spade'}
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(21);
                expect(result.isSoft).toEqual(false)
            })
        })
        describe('I ace test case ',() =>{
            it('should return issoft: false',() =>{
                const hand = [
                    {displayVal:'four', val:4, suit:'spade'},
                    {displayVal:'four', val:5, suit:'spade'},
                    {displayVal:'ace', val:11, suit:'spade'}
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(20);
                expect(result.isSoft).toEqual(false)
            })
        })
        describe('more than 1 ace test case ',() =>{
            it('should return issoft: false',() =>{
                const hand = [
                    {displayVal:'jack', val:10, suit:'hearts'},
                    {displayVal:'ace', val:11, suit:'spade'},
                    {displayVal:'ace', val:11, suit:'spade'}
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(32);
                expect(result.isSoft).toEqual(false)
            })
        })
        describe('more than 1 ace test case ',() =>{
            it('should return issoft: false',() =>{
                const hand = [
                    {displayVal:'jack', val:10, suit:'hearts'},
                    {displayVal:'ace', val:11, suit:'spade'},
                    {displayVal:'ace', val:11, suit:'spade'}
                ]
                const result = calcPoints(hand)
                expect(result.total).toEqual(32);
                expect(result.isSoft).toEqual(false)
            })
        })
    })
    
});