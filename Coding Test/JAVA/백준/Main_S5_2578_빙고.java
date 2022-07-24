import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 빙고
// 실5
// 구현
public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int[] host = new int[25];
		int[][] su = new int[5][5];
		
		StringTokenizer st = null;
    for (int i = 0; i < 5; i++) {
			st = new StringTokenizer(in.readLine());
			for (int j = 0; j < 5; j++) {
				su[i][j] = Integer.parseInt(st.nextToken());
			}
		}
    
		for (int i = 0; i < 25; i++) {
			if (i % 5 == 0) st = new StringTokenizer(in.readLine());
			host[i] = Integer.parseInt(st.nextToken());
		}
		
		for (int n = 0; n < 25; n++) {
			int bcnt = 0;
			
			for (int i = 0; i < su.length; i++) {
				for (int j = 0; j < su[i].length; j++) {
					if (su[i][j] == host[n]) {
						su[i][j] = 0;
					}
				}
			}
			
			// 가로 빙고
			for (int i = 0; i < su.length; i++) {
				int cnt = 0;
				for (int j = 0; j < su[i].length; j++) {
					if (su[i][j] == 0) cnt++;
				}
				
				if (cnt == 5) {
					bcnt++;
				}
			}
			
			// 세로 빙고
			for (int i = 0; i < su.length; i++) {
				int cnt = 0;
				for (int j = 0; j < su[i].length; j++) {
					if (su[j][i] == 0) cnt++;
				}
				
				if (cnt == 5) {
					bcnt++;
				}
			}
			
			// \ 대각선 빙고
			int cnt = 0;
			for (int i = 0; i < 5; i++) {
				if (su[i][i] == 0) cnt++;
			}
			if (cnt == 5) {
				bcnt++;
			}
			
			// / 대각선 빙고
			cnt = 0;
			for (int i = 0; i < 5; i++) {
				if (su[i][4 - i] == 0) cnt++;
			}
			if (cnt == 5) {
				bcnt++;
			}
			
			if (bcnt >= 3) {
				System.out.println(n + 1);
				break;
			}
		}
	}
}
