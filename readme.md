

**sources:**
    - https://betterprogramming.pub/all-javascript-and-typescript-features-of-the-last-3-years-629c57e73e42
    - https://learning.oreilly.com/library/view/typescript-cookbook/9781098136642/ch03.html

1. union types, 
2. intersection types
3. literal types

4. keyof and typeof operators

5. utility types
    see: https://www.typescriptlang.org/docs/handbook/utility-types.html
- Partial&lt;Type&gt;
- Required&lt;Type&gt;
- Readonly&lt;Type&gt;
- Record&lt;string, boolean&gt;
- Pick&lt;Type, 'name' | 'age'&gt;
- Omit&lt;Type, 'name' | 'age'&gt;
- Exclude&lt;UnionType, ExcludedMembers&gt;
- Extract&lt;Type, Union&gt;
- Parameters&lt;typeof functionName&gt;
- ReturnType&lt;typeof functionName&gt;
- Awaited&lt;Type&gt;
- NonNullable&lt;Type&gt;
- ConstructorParameters&lt;Type&gt;
- InstanceType&lt;Type&gt;
- ThisParameterType&lt;Type&gt;
- OmitThisParameter&lt;Type&gt;
- ThisType&lt;Type&gt;

1. indexed access types

2. conditional types
    SomeType extends OtherType ? TrueType : FalseType\
    see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html\
    type Flatten&lt;Type&gt; = Type extends Array&lt;infer Item&gt; ? Item : Type\
    see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types\
    type ToArray&lt;Type&gt;= Type extends any ? Type[] : never\
    see: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

3. type mappings (Key Remapping in Mapped Types)\
    [K in keyof T as NewKeyType]: T[K]

4. recursive conditional types

5.  only import for compilation by marking import as 'type'\
    import { something, type SomeType } from './file';

6.  const assertions\
    as const

7.  indexed access inference improvements

8.  extends constraints on infer type variables

9.  optional variance annotations for type parameters

10. satisfies operator
