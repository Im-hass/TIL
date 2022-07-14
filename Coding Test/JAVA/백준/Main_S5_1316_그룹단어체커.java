// 문제 : https://www.acmicpc.net/problem/1316
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main_S5_1316_그룹단어체커 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(in.readLine()); // 단어의 개수
		int res = 0; // 그룹 단어 개수
		for (int i = 0; i < N; i++) {
			String word = in.readLine(); // 입력받은 단어
			if (check(word)) { // 입력받은 단어가 그룹 단어가 맞을 경우 
				res++; // 그룹 단어 개수 증가
			}
		}
		
		System.out.println(res);
	}

	private static boolean check(String word) {
		boolean[] check = new boolean[26]; // a~z 26개, 문자가 사용된적 있는지 확인
		int prev = 0; // 이전 문자
		
		for (int i = 0; i < word.length(); i++) {
			int now = word.charAt(i);
			if (prev != now) { // 이전 문자와 현재 문자가 다를 경우
				if (check[now - 97]) { // 현재 문자가 사용된적 있는 문자일 경우 
					return false; // 그룹 단어가 아니므로 false 반환 
				} else { // 새로운 문자일 경우
					check[now - 97] = true; // 사용된 문자로 체크
					prev = now; // 현재 문자를 이전 문자로 교체
				}
			}
		}
		
		return true; // 중간에 종료되지 않았으면 그룹 단어이므로 true 반환
	}
}