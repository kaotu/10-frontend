import Link from 'next/link'
import Button from './Button'

const Nextpage = () => (
    <center><Link className="animate fadeOutLeft" href="/character"><a><Button style={{width:'7%',marginTop:'1%'}}>ถัดไป</Button></a></Link></center>
)
export default Nextpage