<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1PT3KE52PE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1PT3KE52PE');
</script>

```typescript
@Controller("trees")
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

  @Get()
  getTrees(): Promise<Tree[]> {
    return this.treeService.findAll();
  }

  @Get("/:id")
  getSingleTree(@Param() params: { id: number }): Promise<Tree> {
    return this.treeService.findOne(params.id);
  }
}
```
