import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneOneColumnContent extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_one_column_contents';
  info: {
    displayName: 'One column Content';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneTwoColumnContent extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_two_column_contents';
  info: {
    displayName: 'Two Column Content';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    reverse_column: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_self', '_parent']>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.one-column-content': DynamicZoneOneColumnContent;
      'dynamic-zone.two-column-content': DynamicZoneTwoColumnContent;
      'shared.cta': SharedCta;
    }
  }
}
