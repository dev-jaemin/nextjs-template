## Nextjs Template

Next.js 기반 템플릿입니다.
프로젝트를 시작할 때 boiler plate로 사용하기 위해 제작되었습니다.
이 프로젝트에서 채택한 라이브러리는 (유사 라이브러리 대비) 개인적으로 좋다고 생각하는 것들입니다.

이 프로젝트는 yarn v4에 맞추어져 있습니다.
yarn 이외의 패키지 매니저 사용시 pnp 사용하실 수 없습니다.

```bash
# for run
yarn dev
```

eslint rule은 순도 100% 제 취향이지만 아마 여러분들의 취향도 저격할 것입니다.
개인적인 경험으로, rule은 약하게 짜면 나중에 후회하게 되더라구요.

Open [http://localhost:3000](http://localhost:3000)

## 적용 라이브러리(추가 예정)

- @vanilla-extract/css
  - zero-runtime CSS in JS 로 런타임 성능 확보
- @tanstack/react-query(v5)
- react-hook-form
- js-cookie

## 적용 라이브러리(devDependencies)

- husky
- swc-loader
- vite
