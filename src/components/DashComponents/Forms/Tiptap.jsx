
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import './tiptap.css'
import { AiOutlineUnorderedList, AiOutlineOrderedList} from 'react-icons/ai'
import {FaHeading, FaParagraph} from 'react-icons/fa'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='flex items-center justify-end w-full border prose space-x-3 px-[15px] py-[10px]'>     
      <div
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${editor.isActive('paragraph') ? 'bg-gray-100 p-[2px_8px] rounded-[5px]' : ''} font-raleway text-[15px] font-[700] cursor-pointer`}
      >
        Paragraph
      </div>
      {/* <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </div> */}
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`${editor.isActive('heading', { level: 4 }) ? 'bg-gray-100 p-[2px_8px] rounded-[5px]' : ''} font-raleway text-[15px] font-[700] cursor-pointer`}
      >
        Heading 
      </div>
      {/* <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </div>
      <div
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </div> */}
      <div
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${editor.isActive('bulletList') ? 'bg-gray-100 p-[2px_8px] rounded-[5px]' : ''} font-raleway text-[15px] font-[700] cursor-pointer`}
      >
       <AiOutlineUnorderedList className='font-[700] text-[20px]'/>
      </div>
      <div
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${editor.isActive('orderedList')? 'bg-gray-100 p-[2px_8px] rounded-[5px]' : ''} font-raleway text-[15px] font-[700] cursor-pointer`}
      >
        <AiOutlineOrderedList className='font-[700] text-[20px] cursor-pointer'/>
      </div>
      
      
      
    </div>
  )
}

function Tiptap ({courseInfo}) {
  const editor = useEditor({
    extensions: [
      StarterKit, 
    ],
    content: {
      'type' : 'doc',
      "content" : []
  },
    onUpdate: ({editor}) => {
      const html = editor.getHTML()
     courseInfo={html}
    }
  })

  return (
    <div className='prose w-full'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor}  className='py-[10px] bg-red-200'/>
    </div>
  )
}

export default Tiptap