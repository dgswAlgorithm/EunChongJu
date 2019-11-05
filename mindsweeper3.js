/* 
 * MindSweeper Game Framework 3.0
 * 
 * 1. 난이도를 선택하고 먼저 맵을 생성한다. -> 클래스를 이용해 새로운 생성자를 만들면 됨.
 * 2. 사용자가 좌표를 클릭한다. (테스트를 위해 랜덤으로)
 * 3. 지뢰를 배치한다. 이때 사용자가 입력한 곳에는 지뢰가 배치되지 않도록 피해가야 함.
 * 4. 지뢰를 배치 완료하면 지뢰 위치를 키값으로 이루어진 배열로 저장한다.
 * 5. 그 배열을 통해 지뢰의 위치 주변 값을 하나씩 올리도록 한다. - 지뢰를 제외한 주변의 26개의 칸에 1씩 올려야 한다.
 * 6. 지뢰의 위치를 저장한 배열에 따라 지뢰의 위치에 지뢰값을 저장한다.
 * 7. 그리고 사용자가 클릭한 시점에서 주변이 0인 부분만 걷어내고 지뢰를 제외한 숫자를 보여준다. (참고: 지뢰 게임)
 * 8. 그리고 게임이 시작.
 * 9. 게임에서 지뢰가 터지면 즉시 게임 오버된다.
 * 
 * *** 업그레이드 내용 ***
 * 1. 기존의 2.0 버전: 2차원 맵을 3차원으로 구동 가능함
 * 2. 지뢰 주변 26개 칸의 값을 더하면서 발생하는 물리적 오류를 해결함.
 * 3. 기존의 버전은 CUI 한정에 한해 사용 가능했으나, CUI는 물론 TUI, GUI 환경에서도 사용할 수 있도록 업그레이드함.
 * 4. ???
 * 
 */