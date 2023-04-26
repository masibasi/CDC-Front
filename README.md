#What is this repo?
> ### This repo is a react-based front-end for CDC_Architecture. 

![image](https://user-images.githubusercontent.com/60805546/234445951-d5f4fe60-e95d-48db-b014-90e8ca0d2257.png)

### React 서버에서 Spring 서버 1, 2, 3를 각각 연동하였다.

- Spring Server1 (SourceDB)로는 Post Api를 통해 새로운 데이터를 **생성, 삭제**가 가능하도록 하였다
- Spring Server2, 3 (SinkDB)로는 Get Api를 통해 sourceDB → Kafka → SInkDB로 CDC되어 업데이트된 SInkDB의 데이터를 를 **확인**하도록 하였다.
- Sink1, Sink2에 접근하는 페이지를 각각 나눠 버튼을 눌러 확인이 가능하도록 하였다.

### Server 소스코드 및 DATABASE, KAFKA 구축 관련 문서 :
https://github.com/masibasi/CDC-Architecture
