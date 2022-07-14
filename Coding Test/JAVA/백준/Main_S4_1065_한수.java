// 문제 : https://www.acmicpc.net/problem/1065
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(in.readLine());
		int res = 0; // 한수의 개수
		for (int i = 1; i <= N; i++) { // 1 ~ N까지 한수인지 확인
			int X = i;
			if (X == 1000) { // X가 1000일 경우
				continue; // 등차수열 아님, 패스
			} else if (X >= 100) { // X가 100의 자릿수일 경우
				int x100 = X / 100; // 100의 자릿값
				X %= 100;
				int x10 = X / 10; // 10의 자릿값
				X %= 10;
				int x1 = X; // 1의 자릿값
				if (x10 - x100 == x1 - x10) { // 각 자리가 등차수열일 경우
					res++;
				}
			} else if (X >= 10) { // X가 10의 자릿수일 경우
				res++;
			} else { // X가 1의 자릿수일 경우
				res++;
			}
		}
		
		System.out.println(res);
	}
}