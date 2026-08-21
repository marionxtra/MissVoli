/* @ds-bundle: {"format":4,"namespace":"MissVoliDesignSystem_f26b9c","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PinCard","sourcePath":"components/brand/PinCard.jsx"},{"name":"PIN_NAMES","sourcePath":"components/brand/PinIcon.jsx"},{"name":"PIN_LABELS","sourcePath":"components/brand/PinIcon.jsx"},{"name":"PinIcon","sourcePath":"components/brand/PinIcon.jsx"},{"name":"StickerBand","sourcePath":"components/brand/StickerBand.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2e675d0682e6","components/brand/PinCard.jsx":"827a11154ba3","components/brand/PinIcon.jsx":"261a8e1803e4","components/brand/StickerBand.jsx":"b1eef233715b","components/core/Badge.jsx":"50880f6326fb","components/core/Button.jsx":"6f2af3c694e1","components/core/Card.jsx":"428fbce947e6","components/core/SectionHeading.jsx":"c21e7423d02c","components/forms/Input.jsx":"db89322eb2af","ui_kits/newsletter/Newsletter.jsx":"88c641bb88bc","ui_kits/pedagogie/Fiche.jsx":"037b6e3d8feb","ui_kits/print/Print.jsx":"97e0964eb982","ui_kits/reseaux_sociaux/Social.jsx":"86bb853df2b4","ui_kits/site_web/Home.jsx":"ab77432e86cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MissVoliDesignSystem_f26b9c = window.MissVoliDesignSystem_f26b9c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function Logo({
  size = 40,
  showWordmark = true,
  basePath = 'assets',
  tone = 'brand',
  style
}) {
  const colors = {
    brand: 'var(--rouge-miss-voli)',
    ink: 'var(--encre-brune)',
    cream: 'var(--creme)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${basePath}/pins/miss-voli.png`,
    alt: "Miss Voli",
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      objectFit: 'contain'
    }
  }), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.52,
      letterSpacing: '-0.01em',
      color: colors[tone]
    }
  }, "Miss Voli"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PinIcon.jsx
try { (() => {
const PIN_NAMES = ['miss-voli', 'mistakes-welcome', 'cinema', 'dialogues', 'diplome', 'en-ligne', 'fearless', 'globe-trotter', 'jeux', 'lyon', 'musique', 'niveau', 'sessions', 'sorties', 'tea', 'th', 'travail', 'vacances'];
const PIN_LABELS = {
  'miss-voli': 'Miss Voli',
  'mistakes-welcome': 'Mistakes welcome',
  cinema: 'Cinéma',
  dialogues: 'Dialogues',
  diplome: 'Diplôme',
  'en-ligne': 'En ligne',
  fearless: 'Fearless',
  'globe-trotter': 'Globe trotter',
  jeux: 'Jeux',
  lyon: 'Lyon',
  musique: 'Musique',
  niveau: 'Niveau',
  sessions: 'Sessions',
  sorties: 'Sorties',
  tea: 'Tea',
  th: 'TH',
  travail: 'Travail',
  vacances: 'Vacances'
};
function PinIcon({
  name = 'miss-voli',
  size = 64,
  basePath = 'assets/pins',
  shadow = true,
  alt,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `${basePath}/${name}.png`,
    alt: alt ?? PIN_LABELS[name] ?? name,
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      objectFit: 'contain',
      filter: shadow ? 'drop-shadow(0 6px 10px rgba(46,27,18,.22))' : 'none',
      ...style
    }
  });
}
Object.assign(__ds_scope, { PIN_NAMES, PIN_LABELS, PinIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PinIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/StickerBand.jsx
try { (() => {
const STAR = 'M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z';
const BUBBLE = 'M4 4.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-5 4v-4H4A1.5 1.5 0 0 1 2.5 15V6A1.5 1.5 0 0 1 4 4.5z';
const TONES = {
  brand: {
    bg: '#C0392B',
    fg: '#FBF2DF'
  },
  cream: {
    bg: '#F3E4C4',
    fg: '#C0392B'
  },
  ink: {
    bg: '#2E1B12',
    fg: '#FBF2DF'
  }
};

/** One repeating tile: star + bubble, spaced by `gap`, drawn as a background image. */
function tile(fg, iconSize, gap) {
  const w = iconSize * 2 + gap * 2;
  const s = iconSize / 24;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${iconSize}" viewBox="0 0 ${w} ${iconSize}" fill="none" stroke="${fg}" stroke-width="${1.6 * s}" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(${gap / 2},0) scale(${s})"><path d="${STAR}"/></g><g transform="translate(${gap * 1.5 + iconSize},0) scale(${s})"><path d="${BUBBLE}"/></g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
function StickerBand({
  height = 56,
  iconSize = 22,
  gap = 34,
  tone = 'brand',
  style
}) {
  const t = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      height,
      background: `${tile(t.fg, iconSize, gap)} repeat-x center center`,
      backgroundColor: t.bg,
      ...style
    }
  });
}
Object.assign(__ds_scope, { StickerBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StickerBand.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  soft: {
    background: 'var(--badge-neutral-bg)',
    color: 'var(--badge-neutral-fg)'
  },
  success: {
    background: 'var(--badge-success-bg)',
    color: 'var(--badge-success-fg)'
  },
  brand: {
    background: 'var(--badge-brand-bg)',
    color: 'var(--badge-brand-fg)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--rouge-miss-voli)',
    boxShadow: 'inset 0 0 0 1.5px var(--rouge-miss-voli)'
  },
  cream: {
    background: 'var(--creme-100)',
    color: 'var(--encre-brune)'
  }
};
function Badge({
  children,
  tone = 'soft',
  size = 'md'
}) {
  const pad = size === 'sm' ? '4px 10px' : '6px 14px';
  const fs = size === 'sm' ? '12px' : '13px';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      whiteSpace: 'nowrap',
      padding: pad,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1.2,
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 700,
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  textDecoration: 'none',
  transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    padding: '9px 18px',
    fontSize: '14px'
  },
  md: {
    padding: '13px 26px',
    fontSize: '16px'
  },
  lg: {
    padding: '17px 34px',
    fontSize: '18px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)',
    border: 'var(--border-width-strong) solid var(--action-primary-bg)',
    boxShadow: 'var(--shadow-brand)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--action-secondary-fg)',
    border: 'var(--border-width-strong) solid var(--action-secondary-border)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: 'var(--border-width-strong) solid transparent'
  },
  onBrand: {
    background: 'var(--creme)',
    color: 'var(--rouge-miss-voli)',
    border: 'var(--border-width-strong) solid var(--creme)'
  }
};
const hovers = {
  primary: {
    background: 'var(--action-primary-bg-hover)',
    borderColor: 'var(--action-primary-bg-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-bg-hover)'
  },
  ghost: {
    background: 'var(--rouge-05)',
    color: 'var(--rouge-miss-voli)'
  },
  onBrand: {
    background: 'var(--creme-100)',
    borderColor: 'var(--creme-100)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  fullWidth = false,
  iconLeft,
  iconRight,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(fullWidth ? {
      width: '100%'
    } : null),
    ...(press && !disabled ? {
      transform: 'scale(var(--press-scale))'
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed',
      boxShadow: 'none'
    } : null)
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: style,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'white',
  padding = 'md',
  as = 'div',
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    white: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)'
    },
    cream: {
      background: 'var(--surface-card-alt)',
      boxShadow: 'none'
    },
    outline: {
      background: 'var(--surface-card)',
      boxShadow: 'none',
      border: 'var(--border-width) solid var(--border-card)'
    },
    brand: {
      background: 'var(--surface-brand)',
      color: 'var(--text-on-brand)',
      boxShadow: 'var(--shadow-brand)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/brand/PinCard.jsx
try { (() => {
function PinCard({
  pin,
  title,
  children,
  badge,
  pinSize = 56,
  basePath = 'assets/pins',
  variant = 'white',
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: variant,
    padding: "md",
    as: href ? 'a' : 'div',
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textDecoration: 'none',
      borderBottom: 'none',
      transform: hover && href ? 'translateY(var(--hover-lift))' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      boxShadow: hover && href ? 'var(--shadow-lg)' : undefined
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PinIcon, {
    name: pin,
    size: pinSize,
    basePath: basePath
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-display-sm)',
      color: variant === 'brand' ? 'var(--creme)' : 'var(--text-body)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: variant === 'brand' ? 'rgba(251,242,223,.82)' : 'var(--text-muted)'
    }
  }, children), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'var(--space-1)'
    }
  }, badge));
}
Object.assign(__ds_scope, { PinCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PinCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  level = 'h2',
  tone = 'ink'
}) {
  const Tag = level;
  const color = tone === 'cream' ? 'var(--creme)' : 'var(--text-body)';
  const leadColor = tone === 'cream' ? 'rgba(251,242,223,.82)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: '680px',
      margin: align === 'center' ? '0 auto' : undefined
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'cream' ? 'var(--peche)' : 'var(--text-brand)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: 'var(--text-display-lg)',
      letterSpacing: 'var(--ls-display)',
      color,
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: leadColor,
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  type = 'text',
  multiline = false,
  rows = 4,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '14px 20px',
    borderRadius: 'var(--radius-pill)',
    border: `var(--border-width) solid ${error ? 'var(--rouge-miss-voli)' : focus ? 'var(--orange)' : 'var(--border-card)'}`,
    background: 'var(--surface-card)',
    font: 'var(--text-body-md)',
    color: 'var(--text-body)',
    outline: 'none',
    transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    boxShadow: focus ? '0 0 0 4px rgba(217,102,46,.15)' : 'none'
  };
  if (multiline) {
    field.borderRadius = 'var(--radius-md)';
    field.resize = 'vertical';
  }
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      font: 'var(--text-body-sm)',
      fontWeight: 700,
      color: 'var(--text-body)',
      paddingLeft: '4px'
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    id: uid,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    style: field,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: error ? 'var(--rouge-miss-voli)' : 'var(--text-muted)',
      paddingLeft: '4px'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/newsletter/Newsletter.jsx
try { (() => {
const {
  Logo,
  Badge,
  Card,
  PinIcon,
  StickerBand,
  Button,
  SectionHeading
} = window.MissVoliDesignSystem_f26b9c;
const PB = '../../assets/pins';
function Email() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 640,
      margin: '0 auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(StickerBand, {
    height: 40,
    iconSize: 18,
    gap: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 8px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "Ao\xFBt 2026 \xB7 N\xBA 14")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 32px 24px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "La lettre du mois",
    title: "Six expressions pour ne plus subir tes r\xE9unions",
    lead: "Et la date des ateliers de septembre, tout en bas."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 24px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "cream",
    padding: "md",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "travail",
    size: 58,
    basePath: PB
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-sm)'
    }
  }, "La fiche du mois"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Parler en r\xE9union \xB7 niveau B1 \xB7 15 minutes")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#"
  }, "T\xE9l\xE9charger")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-display-md)',
      marginBottom: 12
    }
  }, "Ce mois-ci, on travaille"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, [['dialogues', 'Conversation', 'Mardi 19h'], ['travail', 'Business', 'Jeudi 12h30'], ['tea', 'Tea time', 'Jeudi 19h'], ['vacances', 'Travel', 'Samedi 10h']].map(([p, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: p,
    variant: "outline",
    padding: "sm",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: p,
    size: 40,
    basePath: PB
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      fontWeight: 700
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-muted)'
    }
  }, "Une chose avant de te laisser : personne ne parle bien anglais du premier coup. On avance ensemble, \xE0 ton rythme."), /*#__PURE__*/React.createElement("div", {
    className: "mv-annotation",
    style: {
      marginTop: 10
    }
  }, "\u2014 Voli")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 28px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "md",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-sm)',
      color: 'var(--creme)',
      marginBottom: 12
    }
  }, "Il reste trois places en septembre."), /*#__PURE__*/React.createElement(Button, {
    variant: "onBrand",
    href: "#"
  }, "R\xE9server un atelier"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--encre-brune)',
      color: 'rgba(251,242,223,.7)',
      padding: '20px 32px',
      font: 'var(--text-body-sm)',
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Miss Voli \xB7 Lyon, France"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginLeft: 'auto',
      color: 'var(--peche)'
    }
  }, "@missvoli_tutor"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--peche)'
    }
  }, "Se d\xE9sinscrire")));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 24px',
      background: 'var(--creme-100)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto 16px',
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, "Objet :"), " Six expressions pour ne plus subir tes r\xE9unions \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, "Pr\xE9header :"), " La fiche du mois est pr\xEAte."), /*#__PURE__*/React.createElement(Email, null));
}
Object.assign(window, {
  App,
  Email
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/newsletter/Newsletter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pedagogie/Fiche.jsx
try { (() => {
const {
  Logo,
  Badge,
  Card,
  PinIcon,
  StickerBand,
  Button
} = window.MissVoliDesignSystem_f26b9c;
const PB = '../../assets/pins';
const WORDS = [{
  en: 'to nail it',
  fr: 'assurer, déchirer',
  ex: 'You totally nailed that presentation.'
}, {
  en: 'a heads-up',
  fr: 'un petit avertissement',
  ex: 'Thanks for the heads-up about the deadline.'
}, {
  en: 'to wrap up',
  fr: 'conclure, boucler',
  ex: "Let's wrap up and continue tomorrow."
}, {
  en: 'off the top of my head',
  fr: 'de mémoire, comme ça',
  ex: "Off the top of my head, I'd say fifty."
}, {
  en: 'to touch base',
  fr: 'refaire un point',
  ex: "Let's touch base on Friday."
}, {
  en: 'a ballpark figure',
  fr: 'un ordre de grandeur',
  ex: 'Can you give me a ballpark figure?'
}];
const PIEGES = [['I look forward to <b>meeting</b> you', 'I look forward to meet you'], ['I <b>have been</b> here since May', 'I am here since May'], ['She <b>said</b> she was tired', 'She said me she was tired']];
function Header() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      padding: '32px 40px 24px'
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "travail",
    size: 72,
    basePath: PB
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mv-eyebrow"
  }, "Fiche de vocabulaire \xB7 N\xBA 14"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display-lg)',
      margin: '6px 0 8px'
    }
  }, "Parler en r\xE9union"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 520
    }
  }, "Six expressions qui reviennent tout le temps, et trois pi\xE8ges classiques. Lis, r\xE9p\xE8te \xE0 voix haute, puis coche.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "Niveau B1"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "15 minutes")));
}
function WordRow({
  w
}) {
  const [done, setDone] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    variant: done ? 'cream' : 'outline',
    padding: "md",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-sm)',
      color: 'var(--rouge-miss-voli)'
    }
  }, w.en), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)'
    }
  }, w.fr), /*#__PURE__*/React.createElement("div", {
    className: "mv-annotation",
    style: {
      font: 'var(--text-body-sm)',
      fontStyle: 'italic',
      marginTop: 4
    }
  }, "\xAB ", w.ex, " \xBB")), done ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Su") : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setDone(true)
  }, "Je le sais"));
}
function Pieges() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "white",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--menthe)'
    }
  }, "On dit"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '10px 0 0',
      paddingLeft: 18,
      font: 'var(--text-body-md)',
      lineHeight: 1.9
    }
  }, PIEGES.map(p => /*#__PURE__*/React.createElement("li", {
    key: p[0],
    dangerouslySetInnerHTML: {
      __html: p[0]
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "white",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow"
  }, "On \xE9vite"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '10px 0 0',
      paddingLeft: 18,
      font: 'var(--text-body-md)',
      lineHeight: 1.9,
      color: 'var(--text-muted)',
      textDecoration: 'line-through',
      textDecorationColor: 'var(--rouge-10)'
    }
  }, PIEGES.map(p => /*#__PURE__*/React.createElement("li", {
    key: p[1]
  }, p[1])))));
}
function Exercice() {
  const [pick, setPick] = React.useState(null);
  const options = ['touch base', 'nail it', 'wrap up'];
  return /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--peche)'
    }
  }, "\xC0 toi"), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-display-md)',
      color: 'var(--creme)',
      margin: '6px 0 14px'
    }
  }, "\xAB It's late \u2014 let's ______ and finish tomorrow. \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Button, {
    key: o,
    variant: pick === o ? 'primary' : 'onBrand',
    size: "sm",
    onClick: () => setPick(o)
  }, o))), pick && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, pick === 'wrap up' ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Exact \u2014 \xAB let's wrap up \xBB.") : /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "Presque. Relis la troisi\xE8me expression.")));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '32px auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StickerBand, {
    height: 44
  }), /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, WORDS.map(w => /*#__PURE__*/React.createElement(WordRow, {
    key: w.en,
    w: w
  }))), /*#__PURE__*/React.createElement(Pieges, null), /*#__PURE__*/React.createElement(Exercice, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      paddingTop: 'var(--space-4)',
      borderTop: '1.5px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "missvoli.fr \xB7 @missvoli_tutor"))));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pedagogie/Fiche.jsx", error: String((e && e.message) || e) }); }

// ui_kits/print/Print.jsx
try { (() => {
const {
  Logo,
  Badge,
  PinIcon,
  StickerBand
} = window.MissVoliDesignSystem_f26b9c;
const PB = '../../assets/pins';
const MM = 3.78; // px per mm at 96dpi

function Sheet({
  w,
  h,
  label,
  children,
  bg = 'var(--creme)'
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      background: bg,
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, label));
}
function CarteRecto() {
  return /*#__PURE__*/React.createElement(Sheet, {
    w: 85 * MM,
    h: 55 * MM,
    label: "Carte de visite \u2014 recto \xB7 85 \xD7 55 mm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 20,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 44,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1.05 var(--font-display)',
      color: 'var(--rouge-miss-voli)'
    }
  }, "Mistakes welcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "Les erreurs sont les bienvenues.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.4 var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Coach d'anglais ind\xE9pendante \xB7 Lyon & en ligne")));
}
function CarteVerso() {
  return /*#__PURE__*/React.createElement(Sheet, {
    w: 85 * MM,
    h: 55 * MM,
    label: "Carte de visite \u2014 verso \xB7 85 \xD7 55 mm",
    bg: "var(--rouge-miss-voli)"
  }, /*#__PURE__*/React.createElement(StickerBand, {
    height: 26,
    iconSize: 13,
    gap: 18,
    tone: "cream"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px/1.1 var(--font-display)',
      color: 'var(--creme)'
    }
  }, "Miss Voli"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.6 var(--font-body)',
      color: 'var(--peche)'
    }
  }, "missvoli.fr", /*#__PURE__*/React.createElement("br", null), "@missvoli_tutor", /*#__PURE__*/React.createElement("br", null), "bonjour@missvoli.fr")), /*#__PURE__*/React.createElement(PinIcon, {
    name: "miss-voli",
    size: 54,
    basePath: PB,
    style: {
      position: 'absolute',
      right: 16,
      bottom: 14
    }
  }));
}
function FlyerRecto() {
  return /*#__PURE__*/React.createElement(Sheet, {
    w: 148 * MM,
    h: 210 * MM,
    label: "Flyer \u2014 recto \xB7 A5 148 \xD7 210 mm"
  }, /*#__PURE__*/React.createElement(StickerBand, {
    height: 34,
    iconSize: 16,
    gap: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px',
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100% - 68px)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 38,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      marginTop: 22
    }
  }, "Ateliers d'anglais \xB7 Lyon 7e & en ligne"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 40px/1.05 var(--font-display)',
      color: 'var(--rouge-miss-voli)',
      marginTop: 8
    }
  }, "Mistakes", /*#__PURE__*/React.createElement("br", null), "welcome."), /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      textTransform: 'none',
      letterSpacing: 0,
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      color: 'var(--text-brand)',
      marginTop: 4
    }
  }, "Les erreurs sont les bienvenues."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.55 var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 12,
      maxWidth: 330
    }
  }, "On avance ensemble, \xE0 votre rythme. Des petits groupes, des th\xE8mes de vie r\xE9elle, et z\xE9ro jugement \u2014 juste des progr\xE8s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginTop: 22,
      placeItems: 'center'
    }
  }, ['dialogues', 'travail', 'vacances', 'tea', 'cinema', 'musique', 'jeux', 'niveau'].map(p => /*#__PURE__*/React.createElement(PinIcon, {
    key: p,
    name: p,
    size: 62,
    basePath: PB
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "lyon",
    size: 44,
    basePath: PB
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.45 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "Ateliers en pr\xE9sentiel \xE0 Lyon 7e,", /*#__PURE__*/React.createElement("br", null), "et en visio partout ailleurs.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--rouge-miss-voli)',
      color: 'var(--creme)',
      borderRadius: 'var(--radius-pill)',
      padding: '14px 22px',
      textAlign: 'center',
      font: '700 16px var(--font-body)'
    }
  }, "Premier atelier offert \xB7 missvoli.fr")), /*#__PURE__*/React.createElement(StickerBand, {
    height: 34,
    iconSize: 16,
    gap: 22
  }));
}
function FlyerVerso() {
  const rows = [['Conversation', 'Mardi 19h', 'Petit groupe'], ['Business', 'Jeudi 12h30', 'Sur mesure'], ['Tea time', 'Jeudi 19h', 'Gratuit'], ['Travel', 'Samedi 10h', 'Débutant ok']];
  return /*#__PURE__*/React.createElement(Sheet, {
    w: 148 * MM,
    h: 210 * MM,
    label: "Flyer \u2014 verso \xB7 A5 148 \xD7 210 mm",
    bg: "var(--creme-100)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow"
  }, "Le programme"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 27px/1.15 var(--font-display)',
      marginTop: 6
    }
  }, "Quatre rendez-vous par semaine"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 18
    }
  }, rows.map(([t, d, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '13px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-body)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, d)), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft",
    size: "sm"
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 18,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-annotation",
    style: {
      font: '400 15px/1.5 var(--font-body)',
      fontStyle: 'italic',
      color: 'var(--text-body)'
    }
  }, "\xAB Je bloquais en r\xE9union. Trois mois plus tard, je prends la parole sans pr\xE9parer mes phrases. \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px var(--font-body)',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, "Camille"), " \xB7 chef de projet")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "lyon",
    size: 52,
    basePath: PB
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.6 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "missvoli.fr \xB7 @missvoli_tutor", /*#__PURE__*/React.createElement("br", null), "bonjour@missvoli.fr \xB7 Lyon 7e"))));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px var(--gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(CarteRecto, null), /*#__PURE__*/React.createElement(CarteVerso, null)), /*#__PURE__*/React.createElement(FlyerRecto, null), /*#__PURE__*/React.createElement(FlyerVerso, null));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/print/Print.jsx", error: String((e && e.message) || e) }); }

// ui_kits/reseaux_sociaux/Social.jsx
try { (() => {
const {
  Logo,
  Badge,
  PinIcon,
  StickerBand
} = window.MissVoliDesignSystem_f26b9c;
const PB = '../../assets/pins';
function Frame({
  w,
  h,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      background: 'var(--creme)'
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, label));
}
function PostQuote() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 420,
    label: "Post carr\xE9 1080\xD71080 \u2014 citation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rouge-miss-voli)',
      padding: 34,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 38,
    tone: "cream",
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 38px/1.1 var(--font-display)',
      color: 'var(--creme)',
      letterSpacing: '-.01em'
    }
  }, "Mistakes welcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px var(--font-body)',
      color: 'var(--peche)'
    }
  }, "Les erreurs sont les bienvenues.")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 16px/1.5 var(--font-body)',
      color: 'var(--peche)',
      marginTop: 12
    }
  }, "Tu n'as pas besoin d'\xEAtre parfait pour \xEAtre compris."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "@missvoli_tutor"))));
}
function PostVocab() {
  const rows = [['to nail it', 'assurer, déchirer'], ['a heads-up', 'un petit avertissement'], ['to wrap up', 'conclure, boucler']];
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 420,
    label: "Post carr\xE9 1080\xD71080 \u2014 vocabulaire"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "travail",
    size: 46,
    basePath: PB
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow"
  }, "Vocabulaire du mardi"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 24px/1.2 var(--font-display)'
    }
  }, "Au bureau"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rows.map(([en, fr]) => /*#__PURE__*/React.createElement("div", {
    key: en,
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 18px/1.3 var(--font-body)',
      color: 'var(--rouge-miss-voli)'
    }
  }, en), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.4 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, fr)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--text-body-sm)',
      color: 'var(--text-faint)'
    }
  }, "@missvoli_tutor"))));
}
function PostCarousel() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 420,
    h: 420,
    label: "Post carr\xE9 1080\xD71080 \u2014 grille de pins"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--creme-100)',
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow"
  }, "Les ateliers"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 26px/1.15 var(--font-display)'
    }
  }, "Six th\xE8mes, une seule r\xE8gle\xA0: on parle.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      placeItems: 'center'
    }
  }, ['dialogues', 'travail', 'vacances', 'cinema', 'tea', 'jeux'].map(p => /*#__PURE__*/React.createElement(PinIcon, {
    key: p,
    name: p,
    size: 72,
    basePath: PB
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    basePath: "../../assets"
  }))));
}
function Story() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 260,
    h: 462,
    label: "Story 1080\xD71920"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--creme)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(StickerBand, {
    height: 34,
    iconSize: 16,
    gap: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 34px/1.05 var(--font-display)',
      color: 'var(--rouge-miss-voli)',
      marginTop: 12
    }
  }, "Tea time", /*#__PURE__*/React.createElement("br", null), "ce jeudi"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.5 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, "19h, en visio. Une heure de conversation libre, sans th\xE8me impos\xE9."), /*#__PURE__*/React.createElement(PinIcon, {
    name: "tea",
    size: 120,
    basePath: PB,
    style: {
      margin: '10px auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft",
    size: "sm"
  }, "Gratuit"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    size: "sm"
  }, "Tous niveaux")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--rouge-miss-voli)',
      color: 'var(--creme)',
      borderRadius: 'var(--radius-pill)',
      padding: '13px 20px',
      textAlign: 'center',
      font: '700 15px var(--font-body)'
    }
  }, "Swipe up pour r\xE9server")), /*#__PURE__*/React.createElement(StickerBand, {
    height: 34,
    iconSize: 16,
    gap: 22
  })));
}
function StoryQuiz() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 260,
    h: 462,
    label: "Story 1080\xD71920 \u2014 quiz"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rouge-miss-voli)',
      padding: '26px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 30,
    tone: "cream",
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--peche)'
    }
  }, "Quiz du vendredi"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 26px/1.15 var(--font-display)',
      color: 'var(--creme)'
    }
  }, "\xAB I'm looking forward to\u2026 \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 8
    }
  }, ['…to meet you', '…meeting you'].map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      background: i === 1 ? 'var(--menthe)' : 'var(--creme)',
      color: i === 1 ? '#1F3D2A' : 'var(--encre-brune)',
      borderRadius: 'var(--radius-pill)',
      padding: '13px 18px',
      font: '700 15px var(--font-body)'
    }
  }, o))), /*#__PURE__*/React.createElement("div", {
    className: "mv-annotation",
    style: {
      color: 'var(--peche)',
      marginTop: 6
    }
  }, "\xAB Presque parfait, encore un petit effort ! \xBB"), /*#__PURE__*/React.createElement(PinIcon, {
    name: "th",
    size: 100,
    basePath: PB,
    style: {
      margin: 'auto'
    }
  })));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px var(--gutter)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(PostQuote, null), /*#__PURE__*/React.createElement(PostVocab, null), /*#__PURE__*/React.createElement(PostCarousel, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(StoryQuiz, null)));
}
Object.assign(window, {
  App,
  PostQuote,
  PostVocab,
  PostCarousel,
  Story,
  StoryQuiz
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/reseaux_sociaux/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site_web/Home.jsx
try { (() => {
const {
  Logo,
  Button,
  Badge,
  Card,
  PinCard,
  PinIcon,
  StickerBand,
  SectionHeading,
  Input
} = window.MissVoliDesignSystem_f26b9c;
const PB = '../../assets/pins';
function Nav({
  onBook
}) {
  const links = ['Ateliers', 'Formats', 'À propos', 'Tarifs'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(251,242,223,.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1.5px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 42,
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      font: 'var(--text-body-md)',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "R\xE9server un atelier")));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter) 56px',
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "mv-eyebrow"
  }, "Coach d'anglais ind\xE9pendante \xB7 Lyon & en ligne"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display-2xl)',
      color: 'var(--rouge-miss-voli)',
      margin: '14px 0 8px'
    }
  }, "Mistakes welcome."), /*#__PURE__*/React.createElement("p", {
    className: "mv-eyebrow",
    style: {
      color: 'var(--text-brand)',
      margin: '0 0 18px',
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      fontSize: 16
    }
  }, "Les erreurs sont les bienvenues."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "On avance ensemble, \xE0 votre rythme. Des petits groupes, des th\xE8mes de vie r\xE9elle, et z\xE9ro jugement \u2014 juste des progr\xE8s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "R\xE9server un atelier"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "#formats"
  }, "En savoir plus")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "soft"
  }, "Petit groupe"), /*#__PURE__*/React.createElement(Badge, {
    tone: "cream"
  }, "Mardi 19h"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "A2 \u2192 B1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)',
      placeItems: 'center'
    }
  }, ['mistakes-welcome', 'tea', 'dialogues', 'travail', 'miss-voli', 'globe-trotter', 'cinema', 'musique', 'jeux'].map(p => /*#__PURE__*/React.createElement(PinIcon, {
    key: p,
    name: p,
    size: p === 'miss-voli' ? 116 : 82,
    basePath: PB
  }))));
}
const FORMATS = [{
  pin: 'dialogues',
  title: 'Conversation',
  text: 'Une heure, six personnes, un thème. On parle, je corrige à la volée.',
  badge: 'Petit groupe'
}, {
  pin: 'travail',
  title: 'Business',
  text: 'Réunions, mails, pitch. Le vocabulaire dont vous avez besoin lundi matin.',
  badge: 'Sur mesure'
}, {
  pin: 'vacances',
  title: 'Travel',
  text: 'Aéroport, hôtel, resto. Tout ce qui rend un voyage plus simple.',
  badge: 'Débutant ok'
}, {
  pin: 'en-ligne',
  title: 'En ligne',
  text: 'Même atelier, depuis votre canapé. Lien envoyé la veille.',
  badge: 'Visio'
}, {
  pin: 'tea',
  title: 'Tea time',
  text: 'Le rendez-vous informel du jeudi. On papote, en anglais.',
  badge: 'Gratuit'
}, {
  pin: 'sorties',
  title: 'Girls\' night out',
  text: 'Afterwork entre copines, cocktail à la main, anglais dans la conversation.',
  badge: 'Ambiance'
}, {
  pin: 'niveau',
  title: 'Bilan de niveau',
  text: 'Vingt minutes pour situer où vous en êtes et par où commencer.',
  badge: 'Offert'
}];
function Formats({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "formats",
    style: {
      background: 'var(--surface-card)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Formats",
    title: "Choisissez ce qui vous ressemble",
    lead: "Six fa\xE7ons de pratiquer. Vous pouvez changer quand vous voulez."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, FORMATS.map(f => /*#__PURE__*/React.createElement(PinCard, {
    key: f.pin,
    pin: f.pin,
    title: f.title,
    basePath: PB,
    variant: "outline",
    href: "#",
    badge: /*#__PURE__*/React.createElement(Badge, {
      tone: "soft"
    }, f.badge)
  }, f.text))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onBook
  }, "R\xE9server un atelier"))));
}
function Approach() {
  const steps = [{
    pin: 'sessions',
    t: 'On fait le point',
    d: 'Vingt minutes, sans test écrit. Juste une conversation.'
  }, {
    pin: 'diplome',
    t: 'On se fixe un cap',
    d: 'Un objectif concret : votre entretien, votre voyage, votre réunion.'
  }, {
    pin: 'jeux',
    t: 'On pratique',
    d: 'Chaque semaine, un thème et beaucoup de temps de parole.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "La m\xE9thode",
    title: "Trois \xE9tapes, rien de scolaire",
    lead: "Pas de programme fig\xE9. On construit \xE0 partir de ce que vous voulez dire."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.pin,
    variant: "cream",
    padding: "md",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: s.pin,
    size: 54,
    basePath: PB
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display-sm)'
    }
  }, i + 1, ". ", s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-muted)'
    }
  }, s.d)))))));
}
function Temoignages() {
  const q = [{
    n: 'Camille',
    r: 'Chef de projet',
    t: 'Je bloquais en réunion. Trois mois plus tard, je prends la parole sans préparer mes phrases.'
  }, {
    n: 'Yanis',
    r: 'Étudiant',
    t: 'Le format petit groupe change tout. On parle vraiment, on ne récite pas.'
  }, {
    n: 'Nadia',
    r: 'Kinésithérapeute',
    t: 'Zéro jugement, beaucoup de rires. C\'est le seul cours que je n\'ai jamais annulé.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Elles et ils en parlent",
    title: "Des progr\xE8s, pas des notes",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)'
    }
  }, q.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.n,
    variant: "cream",
    padding: "md"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mv-annotation",
    style: {
      font: 'var(--text-body-lg)',
      fontStyle: 'italic',
      color: 'var(--text-body)'
    }
  }, "\xAB ", x.t, " \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, x.n), " \xB7 ", x.r))))));
}
function Newsletter() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "brand",
    padding: "lg",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Chaque mois",
    title: "Une fiche de vocabulaire dans votre bo\xEEte",
    lead: "Dix expressions utiles, un mini-exercice, et la date des prochains ateliers.",
    tone: "cream"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "",
    placeholder: "votre@email.com",
    type: "email"
  }), sent ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "C'est not\xE9 \u2014 \xE0 tr\xE8s vite !") : /*#__PURE__*/React.createElement(Button, {
    variant: "onBrand",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Je m'inscris"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'rgba(251,242,223,.75)'
    }
  }, "Un email par mois. D\xE9sinscription en un clic."))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement(StickerBand, {
    height: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--encre-brune)',
      color: 'var(--creme)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    tone: "cream",
    basePath: "../../assets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      font: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--peche)'
    }
  }, "@missvoli_tutor"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--peche)'
    }
  }, "Mentions l\xE9gales"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'rgba(251,242,223,.7)'
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "lyon",
    size: 34,
    basePath: PB
  }), "Ateliers \xE0 Lyon 7e & en visio")))));
}
function BookingModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(46,27,18,.5)',
      backdropFilter: 'blur(4px)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 50,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 520
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "white",
    padding: "lg"
  }, step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "R\xE9servation",
    title: "Quel atelier vous tente ?"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-3)',
      margin: 'var(--space-6) 0'
    }
  }, FORMATS.slice(0, 3).map(f => /*#__PURE__*/React.createElement(PinCard, {
    key: f.pin,
    pin: f.pin,
    title: f.title,
    pinSize: 40,
    basePath: PB,
    variant: "outline",
    href: "#"
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "Votre email",
    placeholder: "votre@email.com",
    type: "email"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(1)
  }, "Confirmer"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Annuler"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PinIcon, {
    name: "diplome",
    size: 64,
    basePath: PB
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "C'est r\xE9serv\xE9",
    title: "\xC0 mardi 19h !",
    lead: "Vous recevez le lien et le th\xE8me la veille."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Parfait"))))));
}
function App() {
  const [open, setOpen] = React.useState(false);
  const book = () => setOpen(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Formats, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Approach, null), /*#__PURE__*/React.createElement(Temoignages, null), /*#__PURE__*/React.createElement(Newsletter, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BookingModal, {
    open: open,
    onClose: () => setOpen(false)
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site_web/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PinCard = __ds_scope.PinCard;

__ds_ns.PIN_NAMES = __ds_scope.PIN_NAMES;

__ds_ns.PIN_LABELS = __ds_scope.PIN_LABELS;

__ds_ns.PinIcon = __ds_scope.PinIcon;

__ds_ns.StickerBand = __ds_scope.StickerBand;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

})();
