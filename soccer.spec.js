describe('Tests for the soccer.spec.js',() =>{
    describe('Tests for get total points method',() =>{
        it('should return output 8 for string of results wwldd',() =>{
            const game = 'wwldd'
    
            const result = getTotalPoints(game);
            expect (result).toEqual(8);
            
        });
    })
    describe('Tests for order Teams method',() =>{
        it('should output a string in  "Team name: points" format ',() =>{
        
            const teamstring = orderTeams({ name: 'Seahawks', results: 'wwdl' },{ name: 'Mariners', results: 'wlld' })
            const output = `Seahawks: 7
Mariners: 4`
            expect(teamstring).toEqual(output)
        })
    })
    
    
});