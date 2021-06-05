import React, {useState} from 'react';
import {
  StyleSheet,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CNRichTextEditor, {
  CNToolbar,
  getDefaultStyles,
  convertToObject,
} from 'react-native-cn-richtext-editor';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers,
} from 'react-native-popup-menu';

const {SlideInMenu} = renderers;

const IS_IOS = Platform.OS === 'ios';
const {width, height} = Dimensions.get('window');
const defaultStyles = getDefaultStyles();

interface Props {
  resumen: string;
}

function Test(props: Props) {
  const customStyles = {
    ...defaultStyles,
    body: {fontSize: 14},
    heading: {fontSize: 18},
    title: {fontSize: 22},
    ol: {fontSize: 14},
    ul: {fontSize: 14},
    bold: {fontSize: 14, fontWeight: 'bold', color: ''},
  };
  const [state, setState] = useState({
    value: convertToObject(`<div><p>${props.resumen}</p></div>`, customStyles),
  });
  const [colors, setColors] = useState(['red', 'green', 'blue']);
  const [selectedHighlight, setSelectedHighlight] = useState('default');
  const [selectedTag, setSelectedTag] = useState('body');
  const [selectedColor, setSelectedColor] = useState('default');
  const [highlights, setHighlights] = useState([
    'yellow_hl',
    'pink_hl',
    'orange_hl',
    'green_hl',
    'purple_hl',
    'blue_hl',
  ]);
  const [selectedStyles, setSelectedStyles] = useState(['default']);
  var editor: any = null;

  const onStyleKeyPress = (toolType: any) => {
    if (toolType == 'image') {
      return;
    } else {
      editor.applyToolbar(toolType);
    }
  };

  const onSelectedTagChanged = (tag: string) => {
    setSelectedTag(tag);
  };
  const onSelectedStyleChanged = (styles: any) => {
    const color = colors;
    const highlight = highlights;
    let sel = styles.filter((x: any) => color.indexOf(x) >= 0);

    let hl = styles.filter((x: any) => highlight.indexOf(x) >= 0);
    setSelectedStyles(styles);
    setSelectedColor(sel.length > 0 ? sel[sel.length - 1] : 'default');
    setSelectedHighlight(hl.length > 0 ? hl[hl.length - 1] : 'default');
  };

  const onValueChanged = (value: object[]) => {
    setState({
      value: value,
    });
  };

  const onColorSelectorClicked = (value: any) => {
    if (value === 'default') {
      editor.applyToolbar(selectedColor);
    } else {
      editor.applyToolbar(value);
    }

    setSelectedColor(value);
  };
  const onHighlightSelectorClicked = (value: any) => {
    if (value === 'default') {
      editor.applyToolbar(selectedHighlight);
    } else {
      editor.applyToolbar(value);
    }

    setSelectedHighlight(value);
  };

  const renderColorMenuOptions = () => {
    let lst = [];

    if (defaultStyles[selectedColor]) {
      lst = colors.filter(x => x !== selectedColor);
      lst.push('default');
      lst.push(selectedColor);
    } else {
      lst = colors.filter(x => true);
      lst.push('default');
    }

    return lst.map(item => {
      let color = defaultStyles[item] ? defaultStyles[item].color : 'black';
      return (
        <MenuOption value={item} key={item}>
          <MaterialCommunityIcons
            name="format-color-text"
            color={color}
            size={28}
          />
        </MenuOption>
      );
    });
  };

  const renderHighlightMenuOptions = () => {
    let lst = [];

    if (defaultStyles[selectedHighlight]) {
      lst = highlights.filter(x => x !== selectedHighlight);
      lst.push('default');
      lst.push(selectedHighlight);
    } else {
      lst = highlights.filter(x => true);
      lst.push('default');
    }

    return lst.map(item => {
      let bgColor = defaultStyles[item]
        ? defaultStyles[item].backgroundColor
        : 'black';
      return (
        <MenuOption value={item} key={item}>
          <MaterialCommunityIcons name="marker" color={bgColor} size={26} />
        </MenuOption>
      );
    });
  };

  const renderColorSelector = () => {
    let selectedColor = '#737373';
    if (defaultStyles[state.selectedColor]) {
      selectedColor = defaultStyles[state.selectedColor].color;
    }

    return (
      <Menu renderer={SlideInMenu} onSelect={onColorSelectorClicked}>
        <MenuTrigger>
          <MaterialCommunityIcons
            name="format-color-text"
            color={selectedColor}
            size={28}
            style={{
              top: 2,
            }}
          />
        </MenuTrigger>
        <MenuOptions customStyles={optionsStyles}>
          {renderColorMenuOptions()}
        </MenuOptions>
      </Menu>
    );
  };

  const renderHighlight = () => {
    let selectedColor = '#737373';
    if (defaultStyles[selectedHighlight]) {
      selectedColor = defaultStyles[selectedHighlight].backgroundColor;
    }
    return (
      <Menu renderer={SlideInMenu} onSelect={onHighlightSelectorClicked}>
        <MenuTrigger>
          <MaterialCommunityIcons
            name="marker"
            color={selectedColor}
            size={24}
          />
        </MenuTrigger>
        <MenuOptions customStyles={highlightOptionsStyles}>
          {renderHighlightMenuOptions()}
        </MenuOptions>
      </Menu>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      keyboardVerticalOffset={IS_IOS ? 0 : 0}
      style={styles.root}>
      <MenuProvider
        style={{
          borderWidth: 1,
          borderRadius: 20,
        }}>
        <View>
          <CNToolbar
            style={{
              height: 35,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            iconSetContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            size={29}
            iconSet={[
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'bold',
                    buttonTypes: 'style',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-bold" />
                    ),
                  },
                  {
                    toolTypeText: 'italic',
                    buttonTypes: 'style',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-italic" />
                    ),
                  },
                  {
                    toolTypeText: 'underline',
                    buttonTypes: 'style',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-underline" />
                    ),
                  },
                  {
                    toolTypeText: 'lineThrough',
                    buttonTypes: 'style',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-strikethrough-variant" />
                    ),
                  },
                ],
              },
              {
                type: 'seperator',
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'body',
                    buttonTypes: 'tag',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-text" />
                    ),
                  },
                  {
                    toolTypeText: 'title',
                    buttonTypes: 'tag',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-header-1" />
                    ),
                  },
                  {
                    toolTypeText: 'heading',
                    buttonTypes: 'tag',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-header-3" />
                    ),
                  },
                  {
                    toolTypeText: 'ul',
                    buttonTypes: 'tag',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-list-bulleted" />
                    ),
                  },
                  {
                    toolTypeText: 'ol',
                    buttonTypes: 'tag',
                    iconComponent: (
                      <MaterialCommunityIcons name="format-list-numbered" />
                    ),
                  },
                ],
              },
              {
                type: 'seperator',
              },
              {
                type: 'tool',
                iconArray: [
                  {
                    toolTypeText: 'color',
                    iconComponent: renderColorSelector(),
                  },
                  {
                    toolTypeText: 'highlight',
                    iconComponent: renderHighlight(),
                  },
                ],
              },
            ]}
            selectedTag={selectedTag}
            selectedStyles={selectedStyles}
            onStyleKeyPress={onStyleKeyPress}
            backgroundColor="aliceblue"
            color="gray"
            selectedColor="white"
            selectedBackgroundColor="deepskyblue"
          />
        </View>
        <Action onPress={Keyboard.dismiss}>
          <Content>
            <CNRichTextEditor
              ref={input => (editor = input)}
              onSelectedTagChanged={onSelectedTagChanged}
              onSelectedStyleChanged={onSelectedStyleChanged}
              value={state.value}
              style={styles.editor}
              styleList={customStyles}
              foreColor="dimgray"
              onValueChanged={onValueChanged}
              style={{
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            />
          </Content>
        </Action>
      </MenuProvider>
    </KeyboardAvoidingView>
  );
}

const View = styled.View`
  width: 100%;
  min-height: 35px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Action = styled.TouchableWithoutFeedback``;

const Content = styled.View`
  flex: 1;
  align-items: stretch;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
var styles = StyleSheet.create({
  root: {
    height: '70%',
    flexDirection: 'column',
    borderRadius: 20,
  },

  editor: {
    backgroundColor: '#fff',
  },

  menuOptionText: {
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  divider: {
    marginVertical: 0,
    marginHorizontal: 0,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'yellow',
    padding: 0,
    width: 40,
    marginLeft: width - 40 - 30,
    alignItems: 'flex-end',
  },
  optionsWrapper: {
    backgroundColor: 'white',
  },
  optionWrapper: {
    margin: 2,
  },
  optionTouchable: {
    underlayColor: 'gold',
    activeOpacity: 70,
  },
};

const highlightOptionsStyles = {
  optionsContainer: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 40,
    marginLeft: width - 40,

    alignItems: 'flex-end',
  },
  optionsWrapper: {
    backgroundColor: 'white',
  },
  optionWrapper: {
    margin: 2,
  },
  optionTouchable: {
    underlayColor: 'gold',
    activeOpacity: 70,
  },
};

export default Test;
