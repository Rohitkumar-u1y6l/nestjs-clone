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
