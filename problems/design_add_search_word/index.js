class WordDictionary {
    constructor() {
        this.words = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        //Group words by length 
        // { 2: ['hi', 'so'] }
        if(!this.words[word.length]){
            this.words[word.length] = []
        }

        this.words[word.length].push(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        if(!this.words[word.length]) return false
       
        for(let w of this.words[word.length]){
            let match = true
            for(let i=0; i<word.length; i++){
                if(word[i] !== '.' && word[i] !== w[i]){
                    match = false
                    break
                }
            }

            if(match) return true
        }
        return false
    }
}

module.exports = { WordDictionary }