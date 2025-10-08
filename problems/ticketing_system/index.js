class TicketingSystem{
    constructor(type, maxTickets){
        this.type = type
        this.tickets = []
        this.maxTickets = maxTickets
        this.issuedTickets = 0
    }


    issueTickets(n){
        if(n > this.maxTickets-this.issuedTickets){
            console.log(`Cannot issue ${n} ${this.type} tickets. Only ${remaining} left.`);
            return 
        }

        for(let i=0; i<n; i++){
            const ticket = {id: this.issuedTickets+1, type: this.type}
            this.tickets.push(ticket)
            this.issuedTickets++
        }

        console.log(`${n} tickets issued successfully.`);
    }

    availableTickets(){
        console.log(`Available tickets ${this.maxTickets - this.issuedTickets}`)
        return this.maxTickets - this.issuedTickets
    }
}

const platform = new TicketingSystem( 'Basketball', 50)
platform.issueTickets(5);
platform.issueTickets(46);
platform.availableTickets();

const concert = new TicketingSystem( 'Concert', 100)
concert.issueTickets(10);
concert.issueTickets(95);
concert.availableTickets();