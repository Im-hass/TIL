import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// 브2
// 수학, 구현
public class Main_13300 {
	public static void main(String[] args) throws IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		String[] s = in.readLine().split(" ");
		int N = Integer.parseInt(s[0]);
		int K = Integer.parseInt(s[1]);
		int[][] student = new int[6][2];
		
		for (int tc = 0; tc < N; tc++) {
			StringTokenizer st = new StringTokenizer(in.readLine());
			int S = Integer.parseInt(st.nextToken());
			int Y = Integer.parseInt(st.nextToken());
			student[Y - 1][S]++;
		}
		
		int cnt = 0;
		for (int i = 0; i < student.length; i++) {
			for (int j = 0; j < student[i].length; j++) {
				cnt += Math.ceil(student[i][j]*1.0 / K);
			}
		}
		
		System.out.println(cnt);
	}
}

// INPUT :
// 16 2
// 1 1
// 0 1
// 1 1
// 0 2
// 1 2
// 0 2
// 0 3
// 1 3
// 1 4
// 1 3
// 1 3
// 0 6
// 1 5
// 0 5
// 1 5
// 1 6

// OUTPUT :
//12


// INPUT2 :
//3 3
//0 3
//1 5
//0 6

// OUTPUT2 :
//3
