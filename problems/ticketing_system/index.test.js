const TicketingSystem = require('./index');

describe('TicketingSystem', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('issues tickets and increases issued count', () => {
    const t = new TicketingSystem('Basketball', 50);
    t.issueTickets(5);
    expect(t.issuedTickets).toBe(5);
    expect(t.tickets).toHaveLength(5);
    expect(t.tickets[0]).toEqual({ id: 1, type: 'Basketball' });
    expect(t.tickets[4]).toEqual({ id: 5, type: 'Basketball' });
  });

  test('availableTickets returns remaining capacity', () => {
    const t = new TicketingSystem('Concert', 100);
    t.issueTickets(10);
    expect(t.availableTickets()).toBe(90);
  });

  test('does not issue when request exceeds remaining capacity', () => {
    const t = new TicketingSystem('Concert', 10);
    t.issueTickets(8);
    t.issueTickets(5);
    expect(t.issuedTickets).toBe(8);
    expect(t.tickets).toHaveLength(8);
  });

  test('issues up to capacity in multiple calls', () => {
    const t = new TicketingSystem('Basketball', 50);
    t.issueTickets(5);
    t.issueTickets(45);
    expect(t.issuedTickets).toBe(50);
    expect(t.availableTickets()).toBe(0);
  });
});
