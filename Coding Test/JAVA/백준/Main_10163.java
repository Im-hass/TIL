import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// 브1
// 구현
public class Main_10163 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int[][] map = new int[1001][1001];
		int N = Integer.parseInt(in.readLine());
		int[][] paper = new int[N][4];
		
		for (int tc = 1; tc <= N; tc++) {
			String[] s = in.readLine().split(" ");
			for (int i = 0; i < s.length; i++) {
				paper[tc - 1][i] = Integer.parseInt(s[i]);
			}
			
			int x1 = paper[tc - 1][0];
			int x2 = paper[tc - 1][0] + paper[tc - 1][2];
			int y1 = paper[tc - 1][1];
			int y2 = paper[tc - 1][1] + paper[tc - 1][3];
			
			for (int x = x1; x < x2; x++) {
				for (int y = y1; y < y2; y++) {
					map[x][y] = tc;
				}
			}
		}
		
		int[] res = new int[N];
		for (int tc = 1; tc <= N; tc++) {
			for (int i = 0; i < map.length; i++) {
				for (int j = 0; j < map[i].length; j++) {
					if (map[i][j] == tc) res[tc - 1]++;
				}
			}
			sb.append(res[tc - 1]).append("\n");
		}
		
		System.out.println(sb);
	}
}

// 한 줄에 띄어쓰기로 여러개 들어오고 int로 변환할 때 StringTokenizer를 쓰면 하나씩 받을 수 있어서 편하다.

// INPUT :
//2
//0 0 10 10
//2 2 6 6

// OUTPUT :
//64
//36


//INPUT2 :
//3
//0 2 10 10
//7 9 8 4
//8 4 10 6

//OUTPUT2 :
//81
//25
//60
