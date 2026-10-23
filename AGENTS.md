<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Business contact details live only in `src/lib/site.ts`; components import from there so the phone number never drifts.
- Shared site chrome (header, footer, mobile call bar) is rendered in `src/routes/__root.tsx`; marketing building blocks live in `src/components/site/`.
- LocalBusiness JSON-LD is emitted once from the root route head so every page carries it.
