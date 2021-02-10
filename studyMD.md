# 마크다운 정리(\*.md)

## Heading

#### **#** 갯수로 heading 결정

```md
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

---

## Bold

#### \*2개로 감싸면 Bold체(두껍게) 가능

```md
**hks**
```

---

## italic

#### \* 1개로 or \_ 1개로 감싸면 italic체 가능

(자꾸 변하니까 우선 \* -> \_ 로 치환하여 넣음)

```md
_hks_
```

---

## 주석처리(strikethrough)

#### ~ 2개로 감싸면 주석처리처럼 변경

```md
~~hks~~
```

---

## Quote 처리

#### 맨앞에 > 넣으면 됨

```md
> hks
```

---

## ul 리스트 만들기

#### \* or - 넣으면 됨

```mr
 * hks
 - hks
```

---

## Link 만들기

#### [], () 사용

```mr
Click [link](https://github.com/hangueira)
```

---

## Image 만들기

#### !, [], () 사용

```mr
! [link](image url or local address)
```

---

## Table 만들기

#### - |로 감싸고 하단에 |--| 동일하게 추가하면 테이블 생성

```mr
|hks|min|
|--|--|
```

#### |--:|--:| :위치로 왼 or 오 or 중앙 정렬 가능

```mr
|hks|min|
|--:|--:|
|1|2|
```

---

## Task list 만들기

- [x] test1
- [x] test2

---

## Image 규격 통일

#### Html img tag 사용하여 width 주게 되면 일관성있게 사진추가 가능

```html
<img src="img" alt="img bulabula" width="400" />
```
