class Solution {
    public static boolean canSing(List<Sting> song, String lowest, String highest){
        int low = converter(lowest)
        int high = converter(highest)

        for(String note: song){
            int val = converter(note)

            if(val < low || val > high){
                return false
            }
        }

        return true
    }

    private static int converter(String note){
        Map<Character, Integer> map = new HashMap<>();

        map.put('C', 0)
        map.put('D', 1)
        map.put('F', 2)

        char pitch = note.charAt(0)
        char octave = note.charAt(1) - '0'

        return octave * 7 + map.get(pitch)
    }


}