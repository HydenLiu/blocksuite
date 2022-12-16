import { Page, BaseBlockModel, IBaseBlockProps } from '@blocksuite/store';

export interface DividerBlockProps extends IBaseBlockProps {
  flavour: 'affine:divider';
}

export class DividerBlockModel
  extends BaseBlockModel
  implements DividerBlockProps
{
  static version = [1, 0] as [number, number];
  flavour = 'affine:divider' as const;

  constructor(page: Page, props: Partial<DividerBlockProps>) {
    super(page, props);
  }

  override block2html(_previousSiblingId: string, _nextSiblingId: string) {
    return `<hr/>`;
  }
}