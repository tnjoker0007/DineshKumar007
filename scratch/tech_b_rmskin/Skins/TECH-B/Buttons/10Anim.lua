function Initialize()

   overStart = tonumber(SKIN:GetVariable('OverStart'))
   overEnd = tonumber(SKIN:GetVariable('OverEnd'))
   downStart = tonumber(SKIN:GetVariable('DownStart'))
   downEnd = tonumber(SKIN:GetVariable('DownEnd'))

end

function Update()

   mouseState = SKIN:GetVariable('MouseState')
   
   if mouseState == 'Over' then 
      MouseOver()
   end
   
   if mouseState == 'Off' then
      SKIN:Bang('!HideMeter', 'MeterText')
      MouseOff()
   end
   
   if mouseState == 'Down' then
      MouseDown()
   end

   if mouseState == 'Up' then
      MouseUp()
   end      

end

function MouseOver()

   currentPos = tonumber(SKIN:GetVariable('CurrentPos'))
      
   if currentPos >= overStart and currentPos < overEnd then
      currentPos = currentPos + 1
      SKIN:Bang('!SetOption', 'MeterImage', 'ImageName', currentPos..'.png')
      SKIN:Bang('!UpdateMeter', '*')
      SKIN:Bang('!Redraw')
   else
      SKIN:Bang('!ShowMeter', 'MeterText')
      SKIN:Bang('!DisableMeasure', 'MeasureAnimScript')
   end
   
   SKIN:Bang('!SetVariable', 'CurrentPos', currentPos)
   
end

function MouseOff()

   currentPos = tonumber(SKIN:GetVariable('CurrentPos'))
         
   if currentPos > overStart then
      currentPos = currentPos - 1
      SKIN:Bang('!SetOption', 'MeterImage', 'ImageName', currentPos..'.png')
      SKIN:Bang('!UpdateMeter', '*')
      SKIN:Bang('!Redraw')
   else
      SKIN:Bang('!DisableMeasure', 'MeasureAnimScript')
   end
   
   SKIN:Bang('!SetVariable', 'CurrentPos', currentPos)

end

function MouseDown()

   currentPos = tonumber(SKIN:GetVariable('CurrentPos'))
      
   if currentPos < downEnd then
      currentPos = currentPos + 1
      SKIN:Bang('!SetOption', 'MeterImage', 'ImageName', currentPos..'.png')
      SKIN:Bang('!UpdateMeter', '*')
      SKIN:Bang('!Redraw')      
   else
      SKIN:Bang('!DisableMeasure', 'MeasureAnimScript')
   end
   
   SKIN:Bang('!SetVariable', 'CurrentPos', currentPos)

end

function MouseUp()

   currentPos = tonumber(SKIN:GetVariable('CurrentPos'))
      
   if currentPos > overEnd then
      currentPos = currentPos - 1
      SKIN:Bang('!SetOption', 'MeterImage', 'ImageName', currentPos..'.png')
      SKIN:Bang('!UpdateMeter', '*')
      SKIN:Bang('!Redraw')      
   else
      SKIN:Bang('!DisableMeasure', 'MeasureAnimScript')
   end
   
   SKIN:Bang('!SetVariable', 'CurrentPos', currentPos)

end