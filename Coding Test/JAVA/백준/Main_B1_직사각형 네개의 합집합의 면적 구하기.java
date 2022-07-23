import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 직사각형 네개의 합집합의 면적 구하기
// 브1
// 구현
public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		int[][] map = new int[10][10];
		int cnt = 0;
		
		for (int tc = 0; tc < 4; tc++) {
			StringTokenizer st = new StringTokenizer(in.readLine());
			int x1 = Integer.parseInt(st.nextToken());
			int y1 = Integer.parseInt(st.nextToken());
			int x2 = Integer.parseInt(st.nextToken());
			int y2 = Integer.parseInt(st.nextToken());
			
			for (int x = x1; x < x2; x++) {
				for (int y = y1; y < y2; y++) {
					map[y][x] = 1;
				}
			}
		}
		
		for (int i = 0; i < map.length; i++) {
			for (int j = 0; j < map[i].length; j++) {
				if (map[i][j] == 1) cnt++;
			}
		}
		
		System.out.println(cnt);
	}
}

// INPUT :
//1 2 4 4
//2 3 5 7
//3 1 6 5
//7 3 8 6

// OUTPUT :
//26
