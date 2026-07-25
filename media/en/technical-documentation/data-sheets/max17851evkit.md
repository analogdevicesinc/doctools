<!-- lastmod 2022-08-03 -->
## MAX17851 Evaluation Kit Datasheet

## General Description

The MAX17851 evaluation kit (EV kit) is used to demonstrate the features and capabilities of the MAX17851 SPI to  UART  safety  monitoring  bridge.  With  communication established, control of the MAX17851 EV kit is executed through the EV kit graphical user interface (GUI) on the host PC. The GUI is Windows XP®-, Windows Vista®-, Windows® 7-, and Windows 10-compatible and is available through your local Maxim Integrated sales office.

The MAX17851 EV kit design provides a convenient platform for evaluating the features and functions of the IC, in  addition  to  the  IC's  electrical  parameters.  The  EV  kit with vertical communication connectors enables the user to quickly build and evaluate the universal asynchronous receiver  transmitter  (UART)  specially  designed  to  interface with Maxim's battery management data acquisition system.

## Benefits and Features

- Provides a Convenient Platform for Evaluating the Features and Functions of the MAX17851
- Versatile GUI Interface for Features Evaluation
- Plug-and-Play Architecture for Rapid System Prototyping
- Proven PCB Layout
- Fully Assembled and Tested

## MAX17851 EV Kit Files

| FILE                                             | DESCRIPTION                              |
|--------------------------------------------------|------------------------------------------|
| MAX1785X_EV kit_Installer.exe                    | Software: Graphical User Interface (GUI) |
| MAX17851_DUAL_SAFEMON_ EVKIT_C_MARKETING_SCH.pdf | Schematic File pdf                       |
| MAX17851_DUAL_SAFEMON_ EVKIT_C_MARKETING_PCB.pdf | PCB Layout File pdf                      |

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX17851

## Quick Start (Single UART)

This  procedure  describes  the  setup  and  initialization  of a  MAX17851  module  in  a  single-UART  communication mode. The user may choose to use a different configura -tion depending on their requirements and testing needs.

Note: The  MAX32625PICO#  that  is  included  in  the MAX17851 EV kit package is not required for evaluation.

## Required Hardware

- One MAX17851 EV kit (includes the MAX32620 interface board)
- User-supplied Windows XP-, Windows Vista-, Windows 7-, or Windows 10-compatible PC with a spare USB port

Note: In the following sections, software-related items are in bold. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

<!-- image -->

Figure 1. MAX17851 EV kit

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

## Procedure

The MAX17851 EV kit is fully  assembled  and  functionally  tested  prior  to  shipment.  Follow  the  steps  below  to become acquainted with the MAX17851 EV kit and initialize the single-UART EV kit communication.

- 1) Install the MAX17851 EV kit software on your computer by running the MAX1785X\_EV kit\_Installer. exe.
- 2) Follow the on-screen instructions shown in the popup window in Figure 2.

Figure 2. MAX17851 software installation

<!-- image -->

Figure 3. MAX17851 confirm software installation.

<!-- image -->

## Evaluates: MAX17851

- 3) Click the Install button to confirm the installation of the MAX1785X GUI.
- 4) After a successful installation of the MAX1785X GUI, a window is displayed for the installation of the required MINIQUSB and FTHR drivers. Administrator privileges are required to install the USB device driver on Windows XP, Windows Vista, Windows 7, and Windows 10.
- 5) Click Next in the device driver installation wizard window.

Figure 4. MAX17851 completed software installation

<!-- image -->

Figure 5. MAX17851 driver installation

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

- 6) Once the installation of the MINIQUSB is completed, click Finish .
- 7) Click Next to confirm the installation of the FTHR driver.
- 8) Connect the MAX32620 to the J25 and J26 headers on the MAX17851 EV kit.
- 9) On the MAX17851 EV kit, connect the 2-wire red/ black loopback cable from J3 to J4.
- 10)  Start the MAX1785X EV KIT software by opening its icon in the Start Programs menu. Select the MAX17853 target device and click Confirm .
- 11)  The EV kit GUI software automatically establishes communication with the MAX32620 interface. The status bar at the bottom of the GUI displays Maxim 32620 BMS USB to serial 00.01.xx and UART Not Initialized (see Figure 24). With the MAX32620 detected, the user can proceed to the next step.
- 12)  In the Communication tab (Figure 24), select the MAX17851 radio button.
- 13)  Click on the Single-UART radio button (Figure 24).
- 14)  Select the Initialization tab (Figure 25).
- 15)  Click the Wakeup button.

Figure 6. MAX17851 MINIQUSB installation complete

<!-- image -->

Evaluates: MAX17851

- 16)  Verify that the communication is established with the MAX17851. The Event Log will read Wakeup successful.
- 17)  The EV kit is now ready for further evaluation.

Figure 7. MAX17851 FTHR driver installation

<!-- image -->

Figure 8. Target device

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Evaluation Procedures

This  section  gives  the  user  step-by-step  procedures  for functional evaluation of the MAX17851 using the GUI.

Evaluates: MAX17851

## Commanded Operation

This  procedure  details  the  process  for  using  the  GUI to send and receive  UART  commands  using  the Commanded Operation tab.

Figure 9. Commanded Operation tab

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. Wakeup Successful must be displayed in the Event Log on the Initialization tab (Figure 25).
- 2) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 3) Select 1 from the DEVCOUNT drop-down menu.

Evaluates: MAX17851

- 4) Write 02,12,00,00 under the UART Message Transmission text box. This is a WRITEALL command to register 0x12 with data 0x0000 . Click the Load button to log the specified command onto the sequence log.
- 5) Observe that the GUI calculates the required length and PEC for the user.
- 6) Click the Run Sequence button to initiate the transmission of the UART commands.
- 7) The received message is displayed in the Receive Buffer field.

Figure 10. Commanded Operation run sequence

<!-- image -->

│

## Sleep Mode

The following procedure describes how to use the GUI and EV kit to use the Sleep Mode feature of the MAX17851.

Figure 11. Sleep Mode tab

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. Wakeup Successful must be displayed in the Event Log on the Initialization tab (Figure 25).
- 2) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 3) Select the Alerts/Status sub-tab (Figure 37) and then open the Alert Enables panel (Figure 38) by clicking the Alert Enables button. Click the Set All button for OPSTATE ALRTEN to command the MAX17851 to check when the device has woken up from sleep. Finally, click the Update All Devices button at the bottom and close the panel.
- 4) Select the Sleep Mode tab (Figure 11) and set the Sleep Mode Cell Balancing Notify to 30 min.

Figure 12. Sleep Mode default configuration

<!-- image -->

Figure 13. Sleep Mode CBTIMER

<!-- image -->

Evaluates: MAX17851

- 5) Click on the Sleep Enable checkbox and select the No, Already Configured . The MAX17851 will enter sleep mode without sending a default configuration to the daisy chain.
- 6) Observe at the top of the Sleep Mode tab that the CBTIMER increments. The current mode status displays Sleep Mode .
- 7) Upon expiration of the CBTIMER , select the Alerts/ Status sub-tab (Figure 37) and observe that SLP ALRT is activated.
- 8) Select the Sleep Mode tab and observe the status at the top of the Sleep Mode tab. The MAX17851 exited Sleep Mode and returned to Commanded Operational Mode .

│

## Safe Monitoring Mode

This procedure details the process for using the GUI to set up the MAX17851 watchdog and enter the Safe Monitoring Mode .

Figure 14. Safety Monitoring Mode tab

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

## Procedure:

- 1) Set up the hardware and run the GUI according to the Quick Start (Single UART) section. Wakeup Successful must be displayed in the Event Log on the Initialization tab (Figure 25).
- 2) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 3) Select the Alerts/Status sub-tab (Figure 37) and then open the Alert Enables panel (Figure 38) by clicking the Alert Enables button. Click the Set All button for OPSTATE ALRTEN to command the MAX17851 to check when the device has entered Safe Monitoring Mode . Finally, click the Update All Devices button at the bottom and close the panel.
- 4) Select the Safe Monitoring Mode tab (Figure 14) and in the Watchdog Control group box, set the Mode to Challenge/Response Watchdog .
- 5) From the Watchdog Debounce drop-list, select 16 . This register controls the number of consecutive watchdog violations that must occur before entering Safe Monitoring Mode .
- 6) Select the Watchdog Period drop-down list and click on 1474.56 ms to set the watchdog time base.

Evaluates: MAX17851

- 7) Click on the Enable Watchdog checkbox and observe at the top of the Safe Monitoring Mode tab that the Status displays Watchdog is Enabled . At this point, the MAX17851 is continuously verifying the MAX32620 operation by communicating via the SPI interface at a fixed interval.
- 8) Use the Watchdog Stall button to disable the MAX32620 watchdog and allow the MAX17851 to enter Safe Monitoring Mode . Observe that the W atchdog Fault Count starts to increment. Once the Watchdog Fault Count reaches the Watchdog Debounce , the MAX17851 will enter Safe Monitoring Mode .
- 9) Observe at the top of the Safe Monitoring Mode tab that the current mode status displays BMS Safe Monitoring Mode .
- 10)  Select the Alerts/Status sub-tab and observe that alerts SAFEMON and WD ERR are activated.
- 11)  In the Safe Monitoring Mode tab use the Recover Watchdog button to exit Safe Monitoring Mode . Observe in the Status group box that the MAX17851 has exited BMS Safe Monitoring Mode and returned to Commanded Operational Mode .

Figure 15. Safety Monitoring Mode status

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Safe Monitoring GPIO Operation

The following procedure demonstrates the use of GPIO 1 and 2 in Safe Monitoring Mode to provide a signal to open the BMS system HV contactors and prevent hazardous conditions.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. Wakeup Successful must be displayed in the Event Log on the Initialization tab (Figure 25).
- 2) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 3) Disconnect the 2-wire red/black loopback cable from J3 and J4.
- 4) Open the Settings panel (Figure 27) by clicking the Settings button. In the GPIO Configuration group box, set GPIOs 1 and 2 to SAFEMON Active HI Output . Click the Confirm Settings button at the bottom and close the panel.
- 5) Select the Alerts/Status sub-tab (Figure 37) and then open the Alert Enables panel (Figure 38) by clicking the Alert Enables button. Click the Set All button for OPSTATE ALRTEN to command the MAX17851 to check when the device has asserted GPIO1/2. Finally, click the Update All Devices button at the bottom and close the panel.
- 6) Select the Safe Monitoring Mode tab (Figure 14) and in the Safe Monitoring Mode group box, set the

Evaluates: MAX17851

SAFEMON Contact Timer Delay (min) to 16 min. The SAFEMON Contact Timer Delay (min) will assert GPIO 1 and 2 at the expiration of the timer.

- 7) In the Watchdog Control group box, set the Mode to Challenge/Response Watchdog .
- 8) From the Watchdog Debounce drop-list, select 1 . This register controls the number of consecutive watchdog violations that must occur before entering Safe Monitoring Mode .
- 9) Select the Watchdog Period drop-down list and click on 6.144 ms to set the watchdog time base.
- 10)  Click on the Enable Watchdog checkbox and observe at the top of the Safe Monitoring Mode tab that the Status displays Watchdog is Enabled . At this point, the MAX17851 is continuously verifying the MAX32620 operation by communicating via the SPI interface at a fixed interval.
- 11)  Use the Watchdog Stall button to disable the MAX32620 watchdog and allow the MAX17851 to enter Safe Monitoring Mode . Observe that the Watchdog Fault Count starts to increment. Once the Watchdog Fault Count reaches the Watchdog Debounce , the MAX17851 will enter Safe Monitoring Mode .
- 12)  Observe that the current mode status displays BMS Safe Monitoring Mode .
- 13)  Once the SAFEMON Contact Timer Delay exceeds the configured time verify that the FAULT alert located at the upper left corner of the GUI is activated.

十

│

Figure 16. Watchdog Fault Count

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

- 14)  Verify the assertion of the Fault alert (DS3) on the MAX17851 EV kit.
- 15)  Select the Alerts/Status sub-tab and observe that alert SM GPIO12 is activated.

## Evaluates: MAX17851

- 16)  Use the Watchdog Recover button to exit Safe Monitoring Mode . Observe that the MAX17851 has exited BMS Safe Monitoring Mode and returned to Commanded Operational Mode .

Figure 17. MAX17851 FAULT LED

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Configuration Memory

This procedure details a simple process for using the GUI to set up and run the Configuration Memory feature of the MAX17851.

## Procedure:

- 1) Set up hardware and run GUI according to the Quick Start (Single UART) section. Wakeup Successful must be displayed in the Event Log on the Initialization tab (Figure 25).
- 2) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 3) Open the Settings panel (Figure 27) by clicking the Settings button. Set the Alert Packet/Keep Alive Timing drop-down list to Infinite delay/disabled . Click the Confirm Settings button at the bottom and close the panel.
- 4) Select the Alerts/Status sub-tab (Figure 37) and then open the Alert Enables panel (Figure 38) by clicking the Alert Enables button. Click the Set All button for OPSTATE ALRTEN and GEN ALRTEN to command the MAX17851 to check if it has encountered a configuration memory error. Finally, click the Update All Devices button at the bottom and close the panel.
- 5) Select the Safe Monitoring Mode tab (Figure 14) and in the Configuration Memory group box, click the Load Configuration Memory button.
- 6) In the Configuration Memory panel, set the two Register Address (Hex) of Configuration Block 0 to 0x65 . In the Data (Hex) box write 0x000F . The
7. contents written to the Data (Hex) will be effectively transmitted to the registers added on Register Address (Hex) once Safe Monitoring Mode is entered. Lastly, click the Confirm Configuration button at the bottom and close the panel.
- 7) Back in the Safe Monitoring Mode tab, click on the Verify Configuration Memory button. This command will verify the contents of the configuration memory and report a DATAPATH ERR alert if it encounters any errors.
- 8) Select the Alerts/Status sub-tab and observe that alert DATAPATH ERR is not activated.
- 9) Connect an oscilloscope to M\_TX\_P and set it to normal trigger on rising edge.
- 10)  In the Safe Monitoring Mode tab, click on the Enable Watchdog checkbox and verify at the top of the Safe Monitoring Mode tab that the Status displays Watchdog is Enabled .
- 11)  Use the Watchdog Stall button to disable the MAX32620 watchdog and allow the MAX17851 to enter Safe Monitoring Mode .
- 12)  Observe that the current mode status displays BMS Safe Monitoring Mode .
- 13)  Verify with an oscilloscope that the Configuration Memory packet was transmitted at the transition to Safe Monitoring Mode .
- 14)  Use the Recover Watchdog button to exit Safe Monitoring Mode . Observe that the MAX17851 has exited BMS Safe Monitoring Mode and returned to Commanded Operational Mode .

## Evaluates: MAX17851

│

## MAX17851 Evaluation Kit Datasheet

## Hardware-In-The-Loop (HIL)

This procedure details a simple process for using the GUI to set up and run the Hardware-In-The-Loop feature of the MAX17851.

Figure 18. MAX17851 Hardware-In-The-Loop configuration

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Procedure:

- 1) Run the GUI according to the Quick Start (Single UART) section.
- 2) On the MAX17851 EV kit, connect one 2-wire red/ black loopback cable from J3 to J19.
- 3) Connect one 2-wire red/black loopback cable from J4 to J18.
- 4) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 5) Select the HIL tab (Figure 19) and set the DEVCOUNT drop-down list to 1 . This is the number of simulated devices.
- 6) Click on the Add UART Command button and observe the UART Command Sequence be populated with an empty sequence. Populate the fields next to Transmit Buffer as Figure 19. The UART command 06,03,00,00,58 will be loaded to the Master once the sequence begins.

## Evaluates: MAX17851

- 7) Under the Simulated Command text box, write the following command: C0,06,03,FF,25,85,00,94 . Press Add to log the specified command onto the simu -lated sequence log. The simulated UART command will be loaded to the Slave device. Observe that the simulated UART command contains a different register address than the loaded command under the UART Command Sequence . This effectively simulates a corrupt register address that causes an LSSM error.
- 8) Select the Run Sequence button to initiate the HIL sequence.
- 9) Observe that the LSSM LED is on under the UART Command Sequence . The data that the Master received is displayed next to the Receive Buffer field. At this point, the user can compare the data that was sent to the data that was received.

Figure 19. HIL run sequence

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

- 10)  Click on the Event Log button located at the bottom right side of the HIL tab. In the HIL Event Log panel (Figure 20), observe the LSSM faults that were simulated.
- 11)  Back in the HIL tab, click on Save Sequence to save the sequence log for future use.

Figure 20. HIL event log

<!-- image -->

## Evaluates: MAX17851

- 12)  Once the pop-up window appears, enter the desired file path where the sequence will be saved. After the file path has been entered click OK to confirm. The sequence will be saved in a standard .cvs format.

│

## MAX17851 Evaluation Kit Datasheet

## Hardware-In-The-Loop (HIL) Preconfigured Test Cases

This procedure details a simple process for using the GUI to set up and run the Hardware-In-The-Loop Preconfigured Test Cases feature of the MAX17851.

## Procedure:

- 1) Run the GUI according to the Quick Start (Single UART) section.
- 2) On the MAX17851 EV kit, connect one 2-wire red/ black loopback cable from J3 to J19.
- 3) Connect one 2-wire red/black loopback cable from J4 to J18.
- 4) Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 5) Select the HIL tab (Figure 19) and set the DEVCOUNT drop-down list to 1 . This is the number of simulated devices.
- 6) Click on the Preconfigured Test Cases button. In the HIL Preconfigured Test Cases panel (Figure 36), select the Corrupt Register Address and Datacheck Error checkboxes. Press the Add Selected Cases

Evaluates: MAX17851

- button to populate the UART Command Sequence and the Simulated Commands .
- 7) Observe that the UART Commanded Sequence data being loaded to the Master MAX17851 is a valid UART command. Under the Simulated Commands observe that the first command has a different register address than the one that will be sent by the Master. The second command has a Data Check byte with a status fault. Both commands will be sent sequentially to the Master once the Slave receives a valid preamble.
- 8) Select the Run Sequence button to initiate the HIL sequence.
- 9) Observe that the LSSM LED is on in the first UART command under the UART Command Sequence . The data that the Master received is displayed next to the Receive Buffer field. At this point, the user can compare the data that was sent to the data that was received.
- 10)  Click on the Event Log button located at the bottom right side of the HIL tab. In the HIL Event Log panel (Figure 22), observe the LSSM and Data Check byte faults that were simulated.

Figure 21. HIL run sequence

<!-- image -->

│

Figure 22. HIL event log

<!-- image -->

## Dual UART Operation

This procedure describes the setup and initialization of a MAX17851 module in a dual-UART communication mode.

Figure 23. Dual UART configuration

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Procedure:

- 1) Connect the MAX32620 to the J25 and J26 headers on the MAX17851 EV kit.
- 2) On the MAX17851 EV kit, connect the 2-wire red/ black loopback cable from J3 to J4.
- 3) Connect the 2-wire red/black loopback cable from J18 to J19.
- 4) Start the MAX1785X EV KIT software by opening its icon in the Start Programs menu. The EV kit GUI software automatically establishes communication with the MAX32620 interface. The status bar at the bottom of the GUI displays Maxim 32620 BMS USB to serial 00.01.xx and UART Not Initialized (see Figure 24). With the MAX32620 detected, the user can proceed to the next step.
- 5) In the Communication tab (Figure 24), select the MAX17851 radio button.
- 6) Click on the Dual UART Interface radio button (Figure 24).
- 7) Select the Initialization tab (Figure 25).
- 8) Click the Wakeup button.
- 9) Verify that the communication is established with the MAX17851. The Event Log will read Wakeup successful.
- 10)  Select the MAX17851 tab (Figure 26) and verify that the current mode is Commanded Operation Mode .
- 11)  Open the Settings panel (Figure 27) by clicking the Settings button. Ensure that the Active Device drop-down menu displays Master , Dual UART . In the GPIO Configuration group box, set GPIOs 1 and 2 to SAFEMON Active HI Output . Set GPIO3 to SAFEMON Active HI Output and GPIO4 to SAFEMON 1-Shot LO Output . Click the Confirm Settings button at the bottom.
- 12)  Open the Settings panel (Figure 27) by clicking the Settings button. Click on the Active Device drop-down menu and select Slave , Dual UART . In the GPIO Configuration group box, set GPIOs 1 and 2 to SAFEMON Active HI Output . Set GPIO3 to SAFEMON 1-Shot LO Output and GPIO4 to SAFEMON Slave Input . Click the Confirm Settings button at the bottom and close the panel.
- 13)  Back in the Commanded Operation tab, click on the Active Device drop-down menu located at the upper right corner of the tab and select Master , Dual UART .
- 14)  Select the Safe Monitoring Mode tab (Figure 30) and in the Safe Monitoring Mode group box, set the SAFEMON Contact Timer Delay (min) to 16 min .

## Evaluates: MAX17851

The SAFEMON Contact Timer Delay (min) will assert GPIO 1 and 2 at the expiration of the timer.

- 15)  Set the GPIO Recovery Delay (mSec) to 100 ms . The GPIO Recovery Delay will assert GPIO 3 or 4 for the duration of the timer. This provides a reset signal to the system via the GPIOs which reset the microcontroller and/or power supply network.
- 16)  In the Watchdog Control group box, set the Mode to Challenge/Response Watchdog .
- 17)  From the Watchdog Debounce drop-list, select 1 . This register controls the number of consecutive watchdog violations that must occur before entering Safe Monitoring Mode .
- 18)  Select the Watchdog Period drop-down list and click on 6.144 ms to set the watchdog time base.
- 19)  Click on the Enable Watchdog checkbox and observe at the top of the Safe Monitoring Mode tab that the Status displays Watchdog is Enabled . At this point, the MAX17851 is continuously verifying the MAX32620 operation by communicating via the SPI interface at a fixed interval.
- 20)  On the MAX17851 EV kit, disconnect the 2-wire red/ black loopback cable from J3 to J4.
- 21)  Use the Watchdog Stall button to disable the MAX32620 watchdog and allow the MAX17851 to enter Safe Monitoring Mode . Observe that the Watchdog Fault Count starts to increment. Once the Watchdog Fault Count reaches the Watchdog Debounce , the MAX17851 will enter Safe Monitoring Mode .
- 22)  Following the assertion of GPIO4 of the Slave, a DOWNHOST command will trigger and assume control of the BMS Safety Monitoring.
- 23)  Verify the assertion of the GPIO3 LED (DS4) of the Slave and the GPIO4 LED (DS5) of the Master on the MAX17851 EV kit.
- 24)  Click on the Active Device drop-down menu located at the upper-right corner of the tab and select Slave , Dual UART .
- 25)  Observe that the current state of the Slave device is BMS Safety Monitoring . At this point, the Slave device has assumed control of the BMS Safety Monitoring State.
- 26)  In the Commanded Operation tab use the SWPOR button to completely reset the MAX17851 and exit Safe Monitoring Mode .
- 27)  Click on the Active Device drop-down menu located at the upper-right corner of the tab and select Master, Dual UART . Click the SWPOR button to reset the Master device.

│

## MAX17851 Evaluation Kit Datasheet

## MAX17851 Graphical User Interface

The  MAX17851  EV  kit  is  evaluated  in  conjunction  with the  MAX1785X evaluation software. The graphical  user interface (GUI) provides a friendly environment for reading and writing to all device registers, as well as executing device commands.

## Communication Tab

The  GUI  startup  cockpit  is  designed  to  guide  the  user through hardware setup and provides overall startup system information. At startup, the GUI automatically initializes Evaluates: MAX17851

and establishes communication with the MAX32620 interface  board  and  places  the  user  on  the Communication tab (see Figure 24). UART status is shown in the lowerright corner of the cockpit.

The GUI is preset to  UART communication with a dual UART  interface  (see  Figure  24).  When  selecting  the UART  configuration,  the  hardware  graphic  updates  to reflect the proper wiring interface for the selected UART. To enable the MAX17851 tab,  the  user  must  select  the MAX17851 radio button.

Figure 24. Communication tab

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Initialization Tab

The Initialization tab (see Figure 25) is used to initialize the system and assign addresses to each device in the daisychain. The correct Single UART Interface or Dual UART Interface radio button must be selected for the hardwired system.  Communication  will  only  be  established  when the  wired  system  aligns  with  the  interface  chosen  from the UARTCFG group box. With the Dual UART Interface radio button selected, the user has the option of selecting Evaluates: MAX17851

UPHOST or DOWNHOST. The Wakeup button initiates the  communication  process,  and  the  Hello  All  button assigns the device addresses.

Along with  establishing  communication,  the  Initialization tab  provides  a  method  to  log  detailed  communication events. The event and detailed logs can be enabled or disabled by clicking the checkboxes in the lower-left corner of the GUI.

Figure 25. Initialization tab

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## MAX17851 Tab

The MAX17851 tab  (Figure  26)  provides  direct  access to  the  registers  of  the  MAX17851.  The  sub-tabs  in  the MAX17851 tab  (see  Figure  26)  offer  powerful  tools  to configure and monitor the current state of the MAX17851. The Commanded Operation sub-tab (see Figure 26) is utilized to send UART commands to the daisy chain.

In  the Commanded  Operation sub-tab,  the SWPOR button on the upper-right side of the GUI, will completely reset the device, emulating a POR condition. The embedded  UART  communication  Lock  Step  State  Machine (LSSM) gets reset by pressing the Clear LSSM button. The Settings button  opens  an  individual  settings  panel to  manage  the  configuration  of  the  MAX17851  (see Figure 27). In the Settings panel, the user can set control properties  of  the  GPIO  and  communication  features.  In addition, the user may configure the MAX17851 Master and Slave separately by changing the Active Device in the Device Selection drop-down menu.

Note: The user must click the Confirm Settings button at the bottom of the panel for the selections to take effect. Selections  made  in  the Settings panel  are  applied  to each MAX17851 device in the system.

Information on each of the parameters on the Settings panel is available in the MAX17851 IC data sheet.

Figure 26. Commanded Operation tab

<!-- image -->

Evaluates: MAX17851

The  current  state  of ALERTB and  GPIOs  3  and  4  are displayed  on  the  upper-left  side  of  the  GUI.  The  GPIO status will change its color to green, if the GPIO pins of the  MAX17851  are  active  high.  Similarly,  the ALERTB light displays the state of the alert pin of the MAX17851. The ALERTB color turns yellow when the MAX17851 pin is active. The FAULT light will activate when GPIO 1 or 2 are active high. The light colors of the GPIOs, FAULT and ALERTB displayed  in  the  GUI  match  the  light-emitting diodes of the MAX17851 EV kit.

To  send  UART  commands  to  the  BMS  daisy  chain, load  the  desired  commands  under  the UART Message Transmission text  box.  Press Load to  log  the  specified  command  onto  the  sequence  log.  Pressing Run Sequence will  run  the  given  commands sequentially. In addition, the user may delete, move up, or move down a selected command by right-clicking the command.

Pressing the Help button will open a separate panel (see Figure 28) where the available UART commands, along with  the  format  and  an  example,  will  be  displayed. The user can visually monitor the current status of the LSSM in the LSSM Status group box located at the bottom of the Commanded Operation sub-tab.

│

Evaluates: MAX17851

Figure 27. Settings panel

<!-- image -->

Evaluates: MAX17851

Figure 28. Commanded Operation Help

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

## Sleep Mode Tab

The Sleep Mode tab (see Figure 29) gives the user the facility  to  manually  control  the  MAX17851  sleep  mode feature.  The  Alert  Packet  settings  for  sleep  mode  are in  the ALERTPCKT group box. The Alert Packet status bits  may  be  masked  from  assertion  of  the ALERTB by selecting  the  desired  checkbox  under  the Alert  Packet Masking group box. To allow the automated generation of Alert Packets during sleep mode, the user must select the Alert  Packet  Enable  (Sleep  Mode) checkbox. The Alert  Packets  monitor  critical  safety  battery  conditions for immediate wakeup. The frequency at which the Alert Packets are generated is controlled by the Sleep Mode Scan Delay drop-down menu. The Alert Packet Buffer group box is the user interface for visually monitoring the Alert Packet status.

## Evaluates: MAX17851

mode. Refer to Table 1 for the contents of the default configuration. The No , Already Configured button assumes that  the  user  has  already  configured  Cell  Balancing  in the  BMS  devices  to  prevent  a  shutdown. Configure Auto-Polling/Cell  Balance  and  Status opens  the Cell Balancing tab for the user to modify the Cell Balancing configuration. Lastly, Cancel closes the pop-up box.

Once sleep mode is entered, an internal timer controlled by  the Sleep  Mode  Cell  Balancing  Notify will  start. The current  cell  balancing  time  will  be  displayed  at  the top  of  the Sleep  Mode tab.  The  user  may  select  the desired  sleep  mode  duration  time  in  the Sleep  Mode Cell Balancing Notify drop-down menu. When the Cell Balancing  timer  exceeds  the  value  programmed,  the device will proceed to exit sleep mode.

Sleep  Mode  is  entered  by  asserting  the Sleep  Enable check  box. A  pop-up  box  will  appear  warning  the  user that Sleep Mode requires the BMS devices to enable Cell Balancing  to  prevent  a  shutdown.  The  pop-up  box  provides the user with four different options. The Yes , Load Configuration button  will  load  a  default  Cell  Balancing configuration  to  the  BMS  devices  before  entering  sleep The Fault alert  at  the  top-left-most  corner  of  the  GUI, will  be activated to notify the user that a wake-up event occurred while returning to the Commanded Operational State. It is important to note that attempting to write to the Configuration  Register  Space  or TX  command  Register Space while in Sleep Mode will cause the SPI ERR ALRT bit to be set in addition to the GPIO ALERT .

## Table 1. Auto Cell Balancing (Default Configuration)

| ADDRESS   | NAME         | DATA   |
|-----------|--------------|--------|
| 0x64      | MEASUREEN1   | 0x3FFF |
| 0x65      | MEASUREEN2   | 0x0000 |
| 0x5F      | POLARITYCTRL | 0x0000 |
| 0x66      | SCANCTRL     | 0x0028 |
| 0x70      | BALEXP1      | 0x03FF |
| 0x71      | BALEXP2      | 0x03FF |
| 0x72      | BALEXP3      | 0x03FF |
| 0x73      | BALEXP4      | 0x03FF |
| 0x74      | BALEXP5      | 0x03FF |
| 0x75      | BALEXP6      | 0x03FF |
| 0x76      | BALEXP7      | 0x03FF |

| ADDRESS   | NAME        | DATA   |
|-----------|-------------|--------|
| 0x77      | BALEXP8     | 0x03FF |
| 0x78      | BALEXP9     | 0x03FF |
| 0x79      | BALEXP10    | 0x03FF |
| 0x7A      | BALEXP11    | 0x03FF |
| 0x7B      | BALEXP12    | 0x03FF |
| 0x7C      | BALEXP13    | 0x03FF |
| 0x7D      | BALEXP14    | 0x03FF |
| 0x6F      | BALSWCTRL   | 0x0000 |
| 0x7E      | BALAUTOVTHR | 0x0001 |
| 0x7F      | BALDYCTRL   | 0x0000 |
| 0x80      | BALCTRL     | 0x3BF0 |

│

## MAX17851 Evaluation Kit Datasheet

Evaluates: MAX17851

Figure 29. Sleep Mode tab

<!-- image -->

## Safe Monitoring Mode Tab

The Safe Monitoring Mode tab  (see  Figure  30)  grants the user the ability to evaluate the Safe Monitoring Mode feature  of  the  MAX17851.  The Load  Configuration Memory button on the upper-left side of the GUI, opens an individual panel to manage the configuration memory feature  of  the  MAX17851  (see  Figure  31).  The  configuration  memory  stores  the  desired  UART  commands to  be  executed  in  Safe  Monitoring  mode  ensuring  all daisy-chain  devices  are  in  a  known  state.  The Verify Configuration Memory button  executes  the  verify  configuration command. Failure of this operation will be indicated by the DATAPATH ERR alert.

The configuration memory consists of three queues that are subdivided into seven blocks and a fourth queue that consists of a single data block. The user may select the desired configuration memory queue for modifications in the Current Queue drop-down menu. An address value of  0xFF  is  a  null  address  and  will  be  skipped  over  and not included. Two consecutive null addresses in the same block signifies the end of that data queue. The Confirm Configuration button at the bottom of the panel must be clicked for the selections to take effect.

The  user  may  disable  the  Safety  Monitoring  State  of the  SAFEMON  FSM  by  selecting  the Disable  Safety Monitoring  States check  box.  Located  in  the Safe Monitoring  Mode group  box  is  the GPIO  Recovery Delay (mSec) .  This  entry  allows  the  microcontroller  the opportunity to read a GPIO pin state and recover. Refer to the MAX17851 IC datasheet for further details on the delay equation.

All GPIOs can be configured in the Settings panel at the Commanded Operation sub-tab. GPIO1 and GPIO2 can be individually configured as consistent output drives for logic signaling to the battery contactor. If a critical threshold is exceeded, GPIO1 and GPIO2 can be asserted to provide signaling to open the BMS system HV contactors and  prevent  hazardous  conditions. SAFEMON Contact Timer Delay (min) controls the timer that will result in the assertion of GPIO 1 and 2 at expiration.

In  a  Master/Single  UART  configuration,  GPIO3  and GPIO4  may  be  utilized  to  control  the  microcontroller recovery.  The  user  must  configure  GPIO  3  and  4  as SAFEMON Active HI Output or SAFEMON Active LO Output .  GPIO3 will be asserted upon successfully completing the loading of the configuration.

│

## MAX17851 Evaluation Kit Datasheet

For a Master/Slave configuration, if the Master encounters an unrecoverable daisy-chain error, the slave device can  assume  control  of  the  BMS  safety  monitoring.  To achieve this functionality, GPIO3 of the Master should be configured as SAFEMON Active HI Output and GPIO4 of  the  Slave  should be configured as SAFEMON Slave Input .  Only  in  this  configuration  will  the  slave  issue  a DOWNHOST command  and  become  the  primary  BMS safe monitoring device. In addition, GPIO4 of the Master and GPIO3 of the Slave can be configured as SAFEMON 1-Shot HI  Output or SAFEMON 1-Shot LO Output to provide a 100ms 1-shot pulse for a system recovery condition to an unresponsive microcontroller.

The SAFEMON GPIO Masking group box gives the user the ability to mask the output of all GPIOs pin drive during the  safety  measure states of the SAFEMON FSM. This provides flexibility within the application to select any critical system.

Once the MAX17851 enters Safe Monitoring Mode, it will automatically  generate  and  transmit  alert  packet  commands. This allows for continued monitoring of the BMS daisy  chain.  The  timing  of  the  Alert  Packet  Generation is controlled by the Safe Monitoring Mode Scan Delay drop-down menu.

To  enter  Safe  Monitoring  Mode,  the  user  must  enable the  watchdog.  Invalid  watchdog  responses  exceeding the Watchdog Debounce set  by  the  user,  will  result  in the  device  entering  Safe  Monitoring  Mode.  Two  different  methods  are  available  to  recover  and  return  to  the commanded  operation  mode.  The  user  can  provide  a valid  watchdog  response  to  watchdog  key  by  pressing  the Recover  Watchdog button. Alternatively,  resetting  the  device  by  pressing  the SWPOR button  in  the Commanded Operation sub-tab.

The Watchdog Control group box gives the user access to the control and configuration of the MAX17851 watchdog  feature.  To  activate  the  watchdog,  click  on  the

## Evaluates: MAX17851

Enable Watchdog check box. This command will initiate the  watchdog  feature  that  verifies  the  operation  of  the microcontroller. The interval in which the microcontroller operation  is  checked  is  controlled  by  the Watchdog Period drop-down menu. If the microcontroller becomes unresponsive,  the Watchdog  Fault  Count will  start  to increment  until  it  exceeds  the Watchdog  Debounce value  that  is  set  by  the  user.  In  addition,  the  user  can visually check the current status of the watchdog in the Status group box.

The watchdog can be configured in two different modes. The  desired  mode  can  be  selected  in  the Mode dropdown list. As a default, the MAX17851 watchdog is configured as a Challenge/Response Watchdog . In this mode, the watchdog key response gets ignored if it is incorrect. Furthermore, the correct watchdog key response will also be ignored during a closed window.

The Standard  Windowed Watchdog mode  provides  a valid  watchdog  refresh  signal  after  receiving  any  value written  to  the  watchdog  key.  The  entered  value  will  be ignored  by  the  MAX17851.  In  this  mode,  the  microcontroller sends watchdog key commands at the rate set in the Watchdog Period drop-down list. Failure to write the watchdog key within the set Watchdog Period rate, will result in the increment of the Watchdog Fault Count .

Note: It is important to mention that programming any of these registers while the watchdog is enabled may cause unexpected operation.

The user may stall the watchdog while in enable to enter Safe Monitoring Mode by pressing the Watchdog Stall button. This command is intended for system-level debugging.

Clicking on the Alert Packet Masking button opens the panel  (see  Figure  32)  where  users  can  mask  the Alert Packet  status  bits  from  assertion  of  the ALERTB .  The Alert Packet Buffer group  box  is  the  user  interface  for visually monitoring the Alert Packet status.

Figure 30. Safe Monitoring Mode tab

<!-- image -->

Figure 31. Configuration Memory

<!-- image -->

Evaluates: MAX17851

Figure 32. Safe Monitoring Alert Packet Masking

<!-- image -->

## HIL Tab

The HIL tab  (see  Figure  34)  is  used  to  test  a  multitude of  communication  failures.  It  serves  as  a  hardware verification  and  thus,  it  is  not  operational  during  Safety Monitoring Mode or Sleep Mode. HIL is achieved by utilizing the MAX17851 TX\_AUTO feature. The HIL configuration  requires that both MAX17851 Master and Slave be populated in the EV kit. The TX/RX lines of the Master are bypassed from the daisy chain and connected to the RX/TX  lines  of  the  Slave.  In  this  mode,  the  UART  will automatically increment the current queue then write the transmit buffer load queue upon receipt of a preamble.

The desired number of simulated devices may be selected  in  the DEVCOUNT drop-down  menu.  Pressing Add UART Command populates two row fields in which the user can enter the desired UART command. This UART command will be loaded to the Master. Under Simulated Command , the user may load the UART simulated command that will be loaded to the Slave. Press Add to log the specified command onto the sequence log. Pressing Run Sequence will run the given commands sequentially. The RX Stop , RX Ready , PEC , and LSSM LEDs report any faults within the received simulated UART command sent by the Slave. The Event Log button opens an individual panel (see Figure 35) that logs details of any communication fault.

│

## Evaluates: MAX17851

Figure 33. HIL configuration

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

In addition, the user may delete, move up, move down, or  run  a  selected  command  by  right-clicking  the  command. The Clear  Sequence button  clears  the Receive Buffer field  data  and  clears  any  LED  fault.  The Save Sequence button saves the UART Command Sequence and Simulated  Commands in  a  standard  .cvs  format. A  sequence  file  can  be  loaded  by  selecting  the Load Sequence button  and  selecting  the  previously  saved sequence .csv file.

## Table 2. Preconfigured Test Cases

| TEST NAME                | UART COMMAND   | SIMULATED UART COMMAND                           | DESCRIPTION                 |
|--------------------------|----------------|--------------------------------------------------|-----------------------------|
| No Preamble              | 06,03,00,00,58 | C0,06,03,00,25,85,00,70                          | Transmit No Preamble Mode   |
| No Stop                  | 06,03,00,00,58 | C0,06,03,00,25,85,00,70                          | Transmit No Stop Mode       |
| No Message               | 06,03,00,00,58 | C0                                               | Transmit No Message         |
| Corrupt CB               | 06,03,00,00,58 | C0,06,03,00,25,85,FF,65                          | Check Byte 0xFF             |
| Corrupt Register Address | 06,03,00,00,58 | C0,06,03,FF,25,85,00,94                          | Register Address Error 0xFF |
| Corrupt Data             | 06,03,00,00,58 | C0,06,03,00,FF,FF,00,58                          | Corrupt Data 0xFF 0xFF      |
| Corrupt PEC              | 06,03,00,00,58 | C0,06,03,00,25,85,00,FF                          | Corrupted PEC 0xFF          |
| Inserted Message         | 06,03,00,00,58 | C0,08,03,00,25,85,25,85,00,A7                    | Inserted Message 0x25 0x85  |
| Inserted Byte            | 06,03,00,00,58 | C0,07,03,00,25,85,00,00,88                       | Inserted Byte 0x00          |
| Deleted Message          | 06,03,00,00,58 | C0,04,03,00,00,58                                | Deleted Message             |
| Deleted Byte             | 06,03,00,00,58 | C0,06,03,00,25,85,74                             | Deleted Byte                |
| Manchester Error         | 06,03,00,00,58 | C0,14,15,A5,AA,00,AA,AA,AA,6A,99,AA, AA,AA,AA,54 | Manchester Error 0x00       |
| Parity Error             | 06,03,00,00,58 | C0,06,03,00,25,85,00,70                          | Transmit Odd Parity Mode    |
| Data Check Error         | 06,03,00,00,58 | C0,06,03,00,25,85,20,EE                          | Check Byte Error 0x20       |

│

Evaluates: MAX17851

Clicking on the Preconfigured Test Cases button, opens an individual panel (see Figure 36) in which the user may select an array of preconfigured test cases that can serve as examples for future evaluation. Table 2 details a brief description of the preconfigured test cases. Note: Refer to  the  MAX17851  Hardware  Integration  document  for detailed explanations of the configuration and implementation of each test case.

Figure 34. HIL tab

<!-- image -->

Figure 35. HIL event log

<!-- image -->

Evaluates: MAX17851

Figure 36. HIL preconfigured test cases

<!-- image -->

## Alerts/Status Tab

The Alerts/Status tab  (see Figure 37) is the user interface for visually monitoring all the Alerts in the MAX17851. The user can use the Clear Device Alerts or the Clear All Device Alerts to clear the faults logged in the system. Furthermore, the faults can be cleared by pressing on the active alert button.

Clicking the Alert Enables button in the top-right corner of the Alerts/Status tab opens the Alert Enable panel (see Figure 38). In the Alert Enable panel, the user may enable the  desired  alerts  by  pressing  on  the  alert  checkbox. Press the Update Active Device or Update All Devices to enable the selected alerts on the MAX17851.

│

## MAX17851 Evaluation Kit Datasheet

Figure 37. Alerts/Status tab

<!-- image -->

Figure 38. Alert enables

<!-- image -->

## MAX17851 Evaluation Kit Datasheet

## MAX17851 Register Map Tab

The MAX17851 registers can be directly modified using the MAX17851 Register Map sub-tab (see Figure 39). A pulldown arrow to the left of the address number allows the  user  to  identify  register  content.  As  an  example, Figure 39 shows register 0x33 content and has the KeepAlive  [3:0] highlighted.  To  alter  the  keep-alive  timing, Evaluates: MAX17851

the  user  must  type  the  desired  hex  value  of  the  period directly  in  the Update Field edit  box  and  then  click  the Set button on the right. Selecting a parameter in a register automatically  highlights  the  bit  values  of  the  parameter and provides a description of the parameter in the Field Description group box.

Figure 39. MAX17851 tab (register map panel)

<!-- image -->

│

## MAX17851 EV Kit Hardware Description

The MAX17851 EV kit PCB is designed with headers, test points, and jumpers, providing convenient access to circuit nets where measurements can be made, and signals monitored.

Figure 40. MAX17851 EV Kit PCB

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## MAX32620 Connector (J25-J26, J9-J10)

To  demonstrate  the  features  and  capabilities  of  the Maxim EV kit SPI to UART Safety Monitoring Bridge, it is essential to include the MAX32620. The MAX17851 EV kit contains the MAX17851 base board and the PC USB interface  board  (MAX32620). The MAX32620 is a rapid development platform designed to help engineers quickly implement battery-optimized solutions. Power and ground for the MAX17851 is derived through the MAX32620 and requires no other power source.

## Master/Slave UART Ports

The  UART  communication  ports  are  identified  as  the Master  port  (J3-J4)  and  the  Slave  port  (J18-J19),  on the  EV  kit  PCB  (see  Figure  42).  Each  UART  port  comprises a differential transmitter and a differential receiver. Communication  data  uses  a  UART  protocol  specifically designed  for  Maxim  battery  management  devices.  The UART protocol is designed to minimize power consumption by allowing slave devices to shut down if the data link is idle for a specified period. Each differential pair includes two test points for observing the communication signals. The Master port test points and Slave port test points, are located on the Master and Slave UART port section.

The EV kit UART network and components are designed for the automotive environment and are capable of enduring battery-management-system compliance testing. This includes  BCI,  ESD  and  radiated  emission.  It  is  critical to  note  that  the  MAX17851 EV kit provides the batterymanagement evaluation system with capacitive isolation on connectors J3, J4, J18 and J19. Footprints for transformer  isolation  are  available  for  evaluation  of  different isolation methods.

## Evaluates: MAX17851

Figure 41. MAX32620 interface connector

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

Figure 42. Master/Slave UART ports

<!-- image -->

Figure 43. Power distribution (J11, J12, and J21)

<!-- image -->

## Power Distribution

Power  is  distributed  to  the  MAX17851  EV  kit  through resistors R58, R59, R62. The chosen resistor selects the power  source  for  DCIN1  and  DCIN2  depending  on  the hardware configuration.

The user has the following options to supply power to the MAX17851 EV kit. Using 3V3\_FTHR, supplies 3.3V coming from the MAX32620 EV kit. The 1V8\_FTHR, supplies 1.8V from the MAX32620 EV kit. Lastly, the LDO can supply 1.8V, 3.3V, 5V from the on-board LDO.

## GPIO Control

GPIO  pins  may  be  configured  as  general  purpose  I/O, commanded by explicit  register  writes,  but  can  also  be individually  configured  to  provide  specific  functionality within BMS Safety Monitoring Mode. GPIO3 and GPIO4 in both the Master and Slave, are equipped with LEDs to facilitate debugging. The user can also evaluate the state of the GPIO (1-4) pins by utilizing the test points on the EV kit. It is important to note that GPIO1 and GPIO2 outputs are isolated. This allows for one of the GPIO outputs to  fail  while  the  other  can  still  safely  assert  the  Battery Contactor signal.

## Evaluates: MAX17851

│

## MAX17851 Evaluation Kit Datasheet

Figure 44. GPIO

<!-- image -->

## Evaluates: MAX17851

## MAX17851 IC Pin Headers

For  convenience,  certain  IC  pins  are  terminated  to  test points for monitoring frequently observed device signals. Examples include CS, DCIN, SCLK, DOUT, DIN, GPIO (1-4), VDDL1, VDDL2, and ALERTB.

The  MAX17851  EV  kit  provides  the  user  with  an  introduction  to  the  features  and  functions  of  the  MAX17851 device. Refer to the MAX17851 IC data sheet for detailed explanations  of  the  product  features,  register  set,  and modes of operation.

Figure 45. MAX17851 IC pin header

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17851EVKIT# | EV kit |

│

## MAX17851 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                   | DNI/DNP   |   QTY | MFG PART #                                                                                                  | MANUFACTURER                                    | VALUE             | DESCRIPTION                                                                                                         | COMMENTS   |
|--------|---------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------|------------|
|      1 | +12V                                                                                                                      | -         |     1 | 5010 KEYSTONE                                                                                               | 5010 KEYSTONE                                   | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;               |            |
|      2 | BUMPER1-BUMPER6                                                                                                           | -         |     6 | SJ-5003(BLACK)                                                                                              | 3M ELECTRONIC SOLUTIONS DIVISION                | SJ-5003(BLACK)    | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE                       |            |
|      3 | C1-C3, C15-C17, C29-C33, C36                                                                                              | -         |    12 | C0603C104J4RAC; X7R0603CTTD104J; GRM188R71C104JA01                                                          | KEMET;KOA SPEER ELECTRONICS INC;MURATA          | 0.1UF             | CAP; SMT (0603); 0.1UF; 5%; 16V; X7R; CERAMIC;                                                                      |            |
|      4 | C4, C18                                                                                                                   | -         |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A | KEMET;MURATA;TDK; TAIYO YUDEN;TDK;AVX           | 1UF               | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                                        |            |
|      5 | C5, C6, C19, C20                                                                                                          | -         |     4 | GRM39C0G150J50V; GRM1885C1H150JA01                                                                          | MURATA;MURATA                                   | 15PF              | CAP; SMT (0603); 15PF; 5%; 50V; C0G; CERAMIC                                                                        |            |
|      6 | C11-C14, C25-C28                                                                                                          | -         |     8 | C1206C222KFRAC                                                                                              | KEMET                                           | 2200PF            | CAP; SMT (1206); 2200PF; 10%; 1500V; X7R; CERAMIC                                                                   |            |
|      7 | C34                                                                                                                       | -         |     1 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN               | MURATA;MURATA;TDK; TDK;SAMSUNG                  | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                      |            |
|      8 | C35                                                                                                                       | -         |     1 | C2012X7R1C225K125AB                                                                                         | TDK                                             | 2.2UF             | CAP; SMT (0805); 2.2UF; 10%; 16V; X7R; CERAMIC                                                                      |            |
|      9 | C47-C49                                                                                                                   | -         |     3 | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A        | WURTH ELECTRONICS INC; TDK;KEMET;MURATA;TDK;AVX | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                      |            |
|     10 | D1, D3-D5, D7, D8, D10, D11, D31, D32, D38-D41                                                                            | -         |    14 | PESD5V0U1UA                                                                                                 | NEXPERIA                                        | 5V                | DIODE; TVS; SMT (SOD-323); VRM=5V                                                                                   |            |
|     11 | D2, D6                                                                                                                    | -         |     2 | ESDCAN03-2BWY                                                                                               | ST MICROELECTRONICS                             | ESDCAN03-2BWY     | DIODE; TVS; SMT; VBR=26.5V; IPP=3.7A                                                                                |            |
|     12 | DS1, DS2                                                                                                                  | -         |     2 | LY L29K-H1K2-26-Z                                                                                           | OSRAM                                           | LY L29K-H1K2-26-Z | DIODE; LED; LY L29K SERIES; SMARTLED; YELLOW; SMT (1608); VF=1.8V; IF=0.02A                                         |            |
|     13 | DS3                                                                                                                       | -         |     1 | LS L29K-G1J2-1-Z                                                                                            | OSRAM                                           | LS L29K-G1J2-1-Z  | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; -40 DEGC TO +100 DEGC                                       |            |
|     14 | DS4-DS7                                                                                                                   | -         |     4 | LGL29K-F2J1-24-Z                                                                                            | OSRAM                                           | LGL29K-F2J1-24-Z  | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                                |            |
|     15 | FAULT                                                                                                                     | -         |     1 |                                                                                                             | 5002 KEYSTONE                                   | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;               |            |
|     16 | GND1-GND5                                                                                                                 | -         |     5 | 9020 BUSS                                                                                                   | WEICO WIRE                                      | MAXIMPAD          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                            |            |
|     17 | J3, J4, J18, J19                                                                                                          | -         |     4 | 502584-0270                                                                                                 | MOLEX                                           | 502584-0270       | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                              |            |
|     18 | J9, J10                                                                                                                   | -         |     2 | TSW-106-17-L-D                                                                                              | SAMTEC                                          | TSW-106-17-L-D    | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQUARE POST HEADER; STRAIGHT; 12PINS; 2X6                                   |            |
|     19 | J17                                                                                                                       | -         |     1 | PEC03DAAN                                                                                                   | SULLINS ELECTRONICS CORP.                       | PEC03DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                            |            |
|     20 | J20                                                                                                                       | -         |     1 | 3-644456-2                                                                                                  | TYCO                                            | 3-644456-2        | CONNECTOR, HEADER STRIP, TH, STR, 2PINS, 1 ROW                                                                      |            |
|     21 | J25                                                                                                                       | -         |     1 | PPTC161LFBN-RC                                                                                              | SULLINS ELECTRONICS CORP                        | PPTC161LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; 2.54MM CONTACT CENTER; FEMALE HEADER; STRAIGHT; 16PINS                             |            |
|     22 | J26                                                                                                                       | -         |     1 | PPPC121LFBN-RC                                                                                              | SULLINS ELECTRONICS CORP                        | PPPC121LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                                    |            |
|     23 | M_ALRT, M_G1-M_G4, S_ALRT, S_G1-S_G4                                                                                      | -         |    10 | 5003                                                                                                        | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     24 | M_CSB, M_DIN, M_DOUT, M_RX_N, M_RX_P, M_SCK, M_TX_N, M_TX_P, S_CSB, S_DIN, S_DOUT, S_RX_N, S_RX_P, S_SCLK, S_TX_N, S_TX_P | -         |    16 |                                                                                                             | 5004 KEYSTONE                                   | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     25 | M_DCIN1, M_DCIN2, M_VDDL1, M_VDDL2, S_DCIN1, S_DCIN2, S_VDDL1, S_VDDL2                                                    | -         |     8 |                                                                                                             | 5000 KEYSTONE                                   | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |            |

## MAX17851 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                     | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                               | COMMENTS   |
|--------|-----------------------------|-----------|-------|------------------------------------------------------------------------------------|---------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------|------------|
| 26     | R1, R12, R23, R46           | -         |     4 | RR0816P-102-B-T5; PCF0603R-1K0B                                                    | SUSUMU CO LTD; TT ELECTRONICS         | 1K             | RES; SMT (0603); 1K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                        |            |
| 27     | R2, R3, R13, R14            | -         |     4 | ERJ-3GEYJ104; CRCW0603100KJN                                                       | PANASONIC;VISHAY                      | 100K           | RES; SMT (0603); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                        |            |
| 28     | R5, R6, R16, R17            | -         |     4 | CRCW060339R0FK                                                                     | VISHAY DALE                           |                | 39 RES; SMT (0603); 39; 1%; +/-100PPM/DEGC; 0.1000W                                                       |            |
| 29     | R7, R8, R18, R19            | -         |     4 | CRCW0603470RFK; ERJ-3EKF4700                                                       | VISHAY DALE;PANASONIC                 |                | 470 RES; SMT (0603); 470; 1%; +/-100PPM/DEGC; 0.1000W                                                     |            |
| 30     | R9, R10, R20, R21           | -         |     4 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC    | 100K           | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |            |
| 31     | R25, R58, R64               | -         |     3 | CRCW06030000Z0                                                                     | VISHAY DALE                           |                | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                             |            |
| 32     | R26                         | -         |     1 | CRCW060347K0FK                                                                     | VISHAY DALE                           | 47K            | RES; SMT (0603); 47K; 1%; +/-100PPM/DEGC; 0.1000W                                                         |            |
| 33     | R31-R38                     | -         |     8 | CRCW060322R0FK                                                                     | VISHAY                                |                | 22 RES; SMT (0603); 22; 1%; +/-100PPM/DEGC; 0.1000W                                                       |            |
| 34     | R39, R42, R44, R45          | -         |     4 | 301-10K-RC                                                                         | XICON                                 | 10K            | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGC; 0.0630W                                                         |            |
| 35     | R40                         | -         |     1 | CRCW060356K0FK                                                                     | VISHAY DALE                           | 56K            | RES; SMT (0603); 56K; 1%; +/-100PPM/DEGC; 0.1000W                                                         |            |
| 36     | R41                         | -         |     1 | CRCW0603120KFK                                                                     | VISHAY DALE                           | 120K           | RES; SMT (0603); 120K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |            |
| 37     | R43, R51, R52, R60          | -         |     4 | CRCW0603220RFK; ERJ-3EKF2200                                                       | VISHAY DALE;PANASONIC                 |                | 220 RES; SMT (0603); 220; 1%; +/-100PPM/DEGC; 0.1000W                                                     |            |
| 38     | R47-R50                     | -         |     4 | CRCW060310K0JN; ERJ-3GEYJ103                                                       | VISHAY DALE;PANASONIC                 | 10K            | RES; SMT (0603); 10K; 5%; +/-200PPM/DEGK; 0.1000W                                                         |            |
| 39     | R53-R56, R61                | -         |     5 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH  |                | 0 RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                 |            |
| 40     | R57                         | -         |     1 | CRCW060339K0FK                                                                     | VISHAY DALE                           | 39K            | RES; SMT (0603); 39K; 1%; +/-100PPM/DEGC; 0.1000W                                                         |            |
| 41     | SU2                         | -         |     1 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED   |            |
| 42     | U1, U2                      | -         |     2 | MAX17851                                                                           | MAXIM                                 | MAX17851       | IC; MON; SPI TO UART SAFETY MONITORING BRIDGE; TSSOP20                                                    |            |
| 43     | U3                          | -         |     1 | MAX15006CATT+                                                                      | MAXIM                                 | MAX15006CATT+  | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                      |            |
| 44     | U4                          | -         |     1 | SN74LVC1G32DBV                                                                     | TEXAS INSTRUMENTS                     | SN74LVC1G32DBV | IC; OR; SINGLE 2-INPUT POSITIVE-OR GATE; SOT23-5                                                          |            |
| 45     | U8, U9                      | -         |     2 | TPD4E004DRY                                                                        | TEXAS INSTRUMENTS                     | TPD4E004DRY    | IC; TVS; 4-CHANNEL ESD-PROTECTION ARRAY FOR HIGH- SPEED DATA INTERFACE TRANSIENT VOLTAGE SUPPRESSOR; SON6 |            |
| 46     | PCB                         | -         |     1 | MAX17851DUALSAFEMON                                                                | MAXIM                                 | PCB            | PCB:MAX17851DUALSAFEMON                                                                                   |            |
| 47     | C7, C8, C21, C22            | DNP       |     0 | C0603C0G500-180JNE; C1608C0G1H180J080AA; GRM1885C1H180J                            | VENKEL LTD.;TDK;MURATA                | 18PF           | CAP; SMT (0603); 18PF; 5%; 50V; C0G; CERAMIC                                                              |            |
| 48     | C9, C10, C23, C24           | DNP       |     0 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                          | MURATA;TDK;MURATA                     | 1000PF         | CAP; SMT (0603); 1000PF; 5%; 50V; C0G; CERAMIC                                                            |            |
| 49     | C37, C38                    | DNP       |     0 | 06035C101JAT                                                                       | AVX                                   | 100PF          | CAP; SMT (0603); 100PF; 5%; 50V; X7R; CERAMIC                                                             |            |
| 50     | J7                          | DNP       |     0 | 502584-0270                                                                        | MOLEX                                 | 502584-0270    | CONNECTOR; FEMALE; SMT; 502584 SERIES; STRAIGHT; 2PINS                                                    |            |
| 51     | R4, R15, R24, R59, R62, R63 | DNP       |     0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH  |                | 0 RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                 |            |
| 52     | R11, R22                    | DNP       |     0 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003;                  | VISHAY DALE;YAGEO; YAGEO;PANASONIC    | 100K           | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                        |            |
| 53     | T3, T4, T7, T8              | DNP       |     0 | AC0603FR-07100KL CEP99-102                                                         |                                       | CEP99-102      | TRANSFORMER; 8; 10KHZ; 15 TURN                                                                            |            |
| TOTAL  |                             |           |   171 |                                                                                    | SUMIDA                                |                |                                                                                                           |            |

Evaluates: MAX17851

## MAX17851 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX17851

## MAX17851 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX17851

## MAX17851 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX17851

## MAX17851 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX17851

## MAX17851 EV Kit PCB Layouts

Silk Top

<!-- image -->

Top

<!-- image -->

Evaluates: MAX17851

Layer 2

<!-- image -->

Layer 3

<!-- image -->

│

## MAX17851 EV Kit PCB Layouts

Bottom

<!-- image -->

Evaluates: MAX17851

Silk Bottom

<!-- image -->

│

## MAX17851 Evaluation Kit Datasheet

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX17851