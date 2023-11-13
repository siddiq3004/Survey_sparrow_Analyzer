import React, { useState } from 'react'
import reactLogo from '../assets/logo.svg';
import icon from '../assets/icon.svg'
import { Input,Flex,Box, Heading, Text, Button } from "@sparrowengg/twigs-react";
import Dra from './Drawer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@sparrowengg/twigs-react";

const Main = (props) => {
  const [name, setName] = useState('')
  const [surveyText, setSurveyText] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // useEffect(() => {
  //   setIsSubmitDisabled(surveyText === '');
  // }, [surveyText]);

  async function handleSubmit() {
    try {
      setIsSubmitDisabled(true);

      const response = await generateQuestion(query(surveyText), client);
      const questionsArray = response?.choices[0]?.message?.content.split('\n');

      const createSurveyResponse = await createSurvey(surveyText, client);
      const surveyObject = JSON.parse(createSurveyResponse).body;
      const surveyId = surveyObject?.data?.id;

      const numQuestions = questionsArray.length;
      await createQuestions(numQuestions, questionsArray, surveyId, client);

      document.getElementById('InputForChatGpt').value = '';
      client.interface.alertMessage('Survey Generated Successfully', { type: 'success' });
      setIsSubmitDisabled(false);
    } catch (error) {
      document.getElementById('InputForChatGpt').value = '';
      setIsSubmitDisabled(false);
      client.interface.alertMessage('Error while generating the survey. If your survey is malformed kindly delete it.', { type: 'failure' });
      console.error(error);
    }
  }

  return (

    <Box className='Main-box'>
      <Box className='Main-box-1'>
        <Flex className='Nav'>
          <Box className='Header'><h1 className='h1'>Analyzer</h1></Box>
          <Box className='about-btn'><Button color='secondary'>About Us</Button></Box>
        </Flex>
          <Flex className='content-layout'>
            <Box css={{
                width: 340,
                height: 400,
                padding: '$4 $8',
                border: '1px solid $neutral200',
                borderRadius: '$lg',
                boxShadow: '$sm',
                backgroundColor: '#F4F6F7',
              }}>
                  <p className='ri-p'> Im Your </p><span className='rii-p'>Analyzer......|</span>
                  <Box className='btn'><Button color='secondary' size='2xl'>Analyze</Button></Box>

            </Box>
          <Input css={{
              width: 540,
              height: 400,
              padding: '$4 $8',
              border: '1px solid $neutral200',
              borderRadius: '$lg',
              boxShadow: '$sm',
              backgroundColor: '$primary100',
            }}
          placeholder='Im here to Summarize Your Text......'/> 
              
          
          </Flex>
          <Flex className='fl'>
            <Box >
              <Dra/>
            </Box>
          </Flex> 
      </Box>

      <Box className='Main-box-2'>
        <h1 className='abt'>About Us</h1>
        <Flex className='flex-abt'>
        <Box css={{
              width: 500,
              height: 480,
              border: '1px solid $neutral200',
              borderRadius: '$lg',
              boxShadow: '$sm',
              backgroundColor: '$primary100',
              backgroundImage: 'url("https://images.hivisasa.com/1200/RMno3P25Nlblackincorp.jpg")',
              borderRadius: '$2xl',
              backgroundSize: 'cover',
              position: 'relative'
            }}>
        
          </Box>
          <Box css={{
                  width: 340,
                  height: 330,
                  padding: '$4 $8',
                  border: '1px solid $neutral200',
                  borderRadius: '$lg',
                  boxShadow: '$sm',
                  backgroundColor: '#4A9CA6',
                }}>
                <Accordion >
                    <AccordionItem value="item-1" >

                      <AccordionTrigger className='acc' >Why to Choose Analyzer !</AccordionTrigger>
                      <AccordionContent className='acc'>The analyzer is a tool equipped with a user-friendly interface designed to efficiently summarize provided information using the ChatGPT API</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>ChatGPT Integration</AccordionTrigger>
                      <AccordionContent className='acc'>ChatGPT helps to summarize the given context.</AccordionContent>
                    </AccordionItem>

                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger>MS Word Integration</AccordionTrigger>
                      <AccordionContent className='acc'>The Analyzed Info can Download through Docs</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Ease To Use</AccordionTrigger>
                      <AccordionContent className='acc'>Very Simple UI and Makes Good Experience</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Scalable</AccordionTrigger>
                      <AccordionContent className='acc'>It Provides Scalability</AccordionContent>
                    </AccordionItem>
                    
                  </Accordion>

            </Box>
    
          
        </Flex>
        <Flex className='Footer'>
                
          <Box className='hf'><p > &copy; Copyright Analyzer & Team </p></Box> 
         
        </Flex>
      </Box> 

    </Box>
  )
}
export default Main
