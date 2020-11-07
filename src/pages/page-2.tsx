import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Marquee from '../components/marquee';

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <input type="text"></input>
    <input type="button"></input>
    <input type="radio"></input>
    <input type="checkbox"></input>
    <Marquee text="BADデータを作ってしまうとその除霊や供養にはその何倍ものコストがかかります。お金は大切に。" />
    <Marquee text="何でもかんでも紙に印刷する時代はもう終わりです。紙前提のフォーマットから抜け出しましょう。" delay="1s" duration="15s" />
  </Layout>
)

export default SecondPage
