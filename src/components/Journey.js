import { useRef } from 'react'
import { Container } from 'react-bootstrap'

const Journey = () => {

  const accordionRef = useRef(null)

  const togglePanel = (panelToActivate) => {
    // Retrieve the necessary elements using the panelToActivate parameter
    const buttons = panelToActivate.parentElement.querySelectorAll('button');
    const content = panelToActivate.parentElement.querySelectorAll('.journey-content');

    // Update the attributes of buttons and content elements
    buttons.forEach((button) => button.setAttribute('aria-expanded', false));
    content.forEach((content) => content.setAttribute('aria-hidden', true));

    panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
    panelToActivate.querySelector('.journey-content').setAttribute('aria-hidden', false);
  };

  const handlePanelClick = (e) => {
    const activePanel = e.target.closest('.journey-panel');
    if (!activePanel) return;
    togglePanel(activePanel);
    console.log(activePanel.children);
  };


  return (
    <section className='journey'>
    <Container>
      <div className='journey-title'><h1 className='journey-title'>My Journey</h1></div>
      <div class='journey-container' ref={accordionRef}>

        {/* <!-- journey Panel 1 --> */}
        <div className='journey-panel' onClick={handlePanelClick}>
        <div className="journey-content" id="panel1-content" aria-labelledby="panel1-heading" aria-hidden="false" role="region">
          <button className='journey-trigger' aria-controls='panel1-content' aria-expanded='true'></button>
          <h2 id='panel1-heading'><span className="journey-title" id="panel1-title">Theatre</span></h2>
          
        </div>
        </div>
      
        {/* <!-- journey Panel 2 --> */}
        <div className="journey-panel" onClick={handlePanelClick}>
        <div className="journey-content" id="panel2-content" aria-labelledby="panel2-title" aria-hidden="true" role="region">
          <button className="journey-trigger" aria-controls="panel2-content" aria-expanded="false"></button>
          <h2 id="panel2-title"><span className="journey-title" id="panel2-title">Live Sound Engineer</span></h2>

        </div>
        </div>
      
        {/* <!-- journey Panel 3 --> */}
        <div className="journey-panel" onClick={handlePanelClick}>
        <div className="journey-content"  id="panel3-content" aria-labelledby="panel3-title" aria-hidden="true" role="region">
        <button className="journey-trigger" aria-controls="panel3-content" aria-expanded="false"></button>
          <h2 id="panel3-title"><span className="journey-title" id="panel3-title">Film School</span></h2>

          
        </div>
        </div>

        {/* <!-- journey Panel 4 --> */}
        <div className="journey-panel" onClick={handlePanelClick}>
        <div className="journey-content"  id="panel4-content" aria-labelledby="panel4-title" aria-hidden="true" role="region">
        <button className="journey-trigger" aria-controls="panel4-content" aria-expanded="false"></button>
          <h2 id="panel4-title"><span className="journey-title" id="panel4-title">Sound Designer</span></h2>

          
        </div>
        </div>
      
        {/* <!-- journey Panel 5 --> */}
        <div className="journey-panel" onClick={handlePanelClick}>
        <div className="journey-content"  id="panel5-content" aria-labelledby="panel5-title" aria-hidden="true" role="region">
        <button className="journey-trigger" aria-controls="panel5-content" aria-expanded="false"></button>
          <h2 id="panel5-title"><span className="journey-title" id="panel5-title">School of Code</span></h2>

          
        </div>
        </div>

        {/* <!-- journey Panel 6 --> */}
        <div className="journey-panel" onClick={handlePanelClick}>
        <div className="journey-content"  id="panel6-content" aria-labelledby="panel6-title" aria-hidden="true" role="region">
        <button className="journey-trigger" aria-controls="panel6-content" aria-expanded="false"></button>
          <h2 id="panel6-title"><span className="journey-title" id="panel6-title">Junior Developer</span></h2>

          
        </div>
        </div>
      </div>
      </Container>
    </section>
  )
}

export default Journey