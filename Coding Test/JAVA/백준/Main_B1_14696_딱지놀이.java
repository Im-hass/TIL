import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_B1_14696_딱지놀이 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int N = Integer.parseInt(in.readLine());
		
		for (int tc = 0; tc < N; tc++) {
			StringTokenizer st = new StringTokenizer(in.readLine());
			int M = Integer.parseInt(st.nextToken());
			int[] A = new int[4];
			for (int i = 0; i < M; i++) {
				int n = Integer.parseInt(st.nextToken());
				A[n - 1]++;
			}
			st = new StringTokenizer(in.readLine());
			M = Integer.parseInt(st.nextToken());
			int[] B = new int[4];
			for (int i = 0; i < M; i++) {
				int n = Integer.parseInt(st.nextToken());
				B[n - 1]++;
			}

			if (A[3] > B[3]) sb.append("A").append("\n");
			else if (A[3] < B[3]) sb.append("B").append("\n");
			else if (A[3] == B[3] && A[2] > B[2]) sb.append("A").append("\n");
			else if (A[3] == B[3] && A[2] < B[2]) sb.append("B").append("\n");
			else if (A[2] == B[2] && A[1] > B[1]) sb.append("A").append("\n");
			else if (A[2] == B[2] && A[1] < B[1]) sb.append("B").append("\n");
			else if (A[1] == B[1] && A[0] > B[0]) sb.append("A").append("\n");
			else if (A[1] == B[1] && A[0] < B[0]) sb.append("B").append("\n");
			else sb.append("D").append("\n");
			
		}
		
		System.out.println(sb);
	}
}
