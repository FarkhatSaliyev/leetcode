class StockSpanner {

    //Brute force
    private List<Integer> prices;

    //Optimal
    private Deque<int[]> stack;


    public StockSpanner() {
        //Brute force
        prices = new ArrayList<>();

        //Optimal
        stack = new ArrayDeque<>();        
    }
    
    public int next(int price) {
        //Brute force
        prices.add(price);

        int count = 1;
        for(int i = prices.size() - 2; i>=0; i--){
            if(prices.get(i) <= price){
                count++;
            }else{
                break;
            }
        }

        return count;

        //Optimal
        int count = 1;

        while(!stack.isEmpty() && stack.peek()[0] <= price){
            count += stack.pop()[1];
        }

        stack.push(new int[]{price, count});
        return count;
    }
}