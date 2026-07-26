<!-- lastmod 2022-08-02 -->
## MAX77501 Evaluation Kit

## General Description

The MAX77501 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  MAX77501 piezo driver. The EV kit allows for easy evaluation of the MAX77501 and its ability to drive a large haptic signal through a ceramic piezo actuator.

The MAX77501 is a boost controller that drives the gates of a pair of low-side and high-side MOSFETs to step up an input haptic signal to a level suitable for piezo haptics. It includes all necessary external components to operate the IC. The MAX77501 takes digital input signals in one of two forms: data stored on internal RAM or fed through the internal FIFO (First-In, First-Out) system. The EV kit supports  both  formats  of  input.  Windows-based  GUI software  provides  a  user-friendly  graphical  interface  as well as a detailed register-based interface to exercise the features of the MAX77501.

## MAX77501 EV Kit Board Photo

<!-- image -->

Windows is a registered trademark of Microsoft Corp.

## Features

- Easy to Use
- GUI Drives SPI Interface
- Access to the Digital Engine through Software GUI
- Assembled and Fully Tested
- Selectable Headers for Quick Testing of Different Output Capacitors (J7 for 330nF, J9 for 680nF, or J5 for 1µF)
- Buffer-Configured Operational Amplifier Attached to Feedback of Converter for Measuring a Scaled-Down Version of the Output Voltage or the Output of the DAC
- Test Points to Measure All Outputs of the Boost Converter and Charge Pumps

Ordering Information appears at end of data sheet.

Evaluates: MAX77501

<!-- image -->

Figure 1. EV Kit Block Diagram

<!-- image -->

Evaluates: MAX77501

Figure 2. MAX77501 EV Kit Top View

<!-- image -->

## MAX77501 Evaluation Kit

## EV Kit Default Configuration

- VIN  = 2.8V to 5.5V
- VOUT = 10V to 120V (up to 110V PK-PK  haptic waveform generation)
- 330nF, 680nF, or 1µF selectable output capacitor
- Default enabled into 70µA standby mode

## Quick Start

Evaluates: MAX77501

## Required Equipment

- MAX77501 EV kit
- Windows-based PC
- Power supply with 5.5V and 1A capability
- Oscilloscope
- Micro-B USB cable
- GUI

Follow  this  procedure  to  familiarize  yourself  with  the EVKIT.

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                           |
|------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1                     | 1-2                | Not Installed : The inductor is not connected to V IN of the IC. Connect a power source to the inductor through either the V IN and PGND test points or J12. Power the IC through pin 2 of the J1 header. 1-2 : V IN to the inductor and to the IC are shorted together. Connect a power supply to the V IN header or a battery to J12 to power both the IC and the inductor path. |
| J3                     | 1-2                | 1-2 : Connects the 1.8V LDO output of the USB interface circuit to the V IO pin on the MAX77501 IC.                                                                                                                                                                                                                                                                                |
| J4                     | 1-2                | Not Installed : Nothing is connected to the input of the buffer amplifier. 1-2 : The FB pin is connected to the input of the buffer amplifier. Measure the VREFBUF pin to measure the signal at the FB pin. 2-3 : The output of the DAC (V O_DAC ) is connected to the input of the buffer amplifier. Measure the VREFBUF pin to measure the output of the DAC.                    |
| J6                     | 1-2                | Not Installed : Pulls nEN high and disables the IC. 1-2 : Pulls nEN low and enables the IC.                                                                                                                                                                                                                                                                                        |
| J5                     | Not Installed      | 1-2: Connects a 1µF capacitor from V PIEZO to PGND.                                                                                                                                                                                                                                                                                                                                |
| J7                     | Not Installed      | 1-2: Connects a 330nF capacitor from V PIEZO to PGND.                                                                                                                                                                                                                                                                                                                              |
| J9                     | Not Installed      | 1-2: Connects a 680nF capacitor from V PIEZO to PGND.                                                                                                                                                                                                                                                                                                                              |
| J8                     | Not Installed      | 1-2 : Disables the level translator between the GUI circuit SPI pins and the SPI pins of the IC.                                                                                                                                                                                                                                                                                   |

│

## MAX77501 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) Install the GUI software. Navigate to the product webpage ( www.maximintegrated.com/MAX77501 ), click on the Design Resources tab, and download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) In the same folder as the GUI software, download the example RAM and FIFO data files. Save the example files '130Hz\_80Vpp\_32kHz.ram' and '130Hz\_80Vpp\_32kHz.fifo' to a known location on your PC.
- 3) Install the EV kit shunts per Table 1.
- 4) Insert a shunt on J7 to connect the 330nF output capacitor to the output of the device. This capacitor serves as a substitute for a piezo capacitance.
- 5) Connect a micro-B USB cable between the EV kit's J10 and your Windows-based PC.
- 6) Apply a 3.7V supply across the VIN and PGND terminals of the EV kit.
- 7) Install a shunt on J6 to pull nEN low and enable the part.
- 8) Open the GUI and press the 'Connect' button in the 'Device' drop-down menu. Wait for the device to respond, and in the 'CONNECTED\_DEVICE\_LIST' window press the 'Connect' button.
- 9) Attach an oscilloscope probe to the output (between test points V PIEZO  and PGND2) and set it up to measure a 130Hz sine wave from 10V to 90V. At this point the output should be sitting a few hundred millivolts below the input voltage.
- 10) Under the 'Interrupts' tab, press 'Read Once' at the top of the window. This reads the interrupts register of the IC and clears the SPI Ready Interrupt. Haptic playback cannot happen until the SPI Ready Interrupt clears.

## Evaluates: MAX77501

- 11) Under the 'RAM Control' tab, press 'Open' under the 'RAM Data File' Section. Navigate through your file system to the folder where the file '130Hz\_80Vpp\_32kHz.ram' is saved and press open. Press the 'Write' button.
- a. After completing the next couple steps, if you see a  noisy  signal  on  your  oscilloscope,  make  sure you pressed 'Write' on the RAM file loader.
- 12) In the 'Number of Waveforms to Play' box, type 1 and press enter on your keyboard (note that pressing enter causes Windows to play a sound; this is normal and not indicative of an error). This box programs the 'NUM\_WAVEFORMS\_PLAY' register that sets the number of waveforms that will be played from the RAM. In the 'Number of Wave -forms in RAM' box, type 1 and press enter on your keyboard. This box programs the 'NUM\_WAVE -FORM\_RAM register that sets the number of waveforms that are being stored in the RAM. Press the 'Write' button to write to these registers.
- 13) In the 'Play 0 Waveform ID' box, type 0 and press enter. This box signifies that waveform 0 shall be played first. In the 'Play 0 Repeat' box, type 0 and press enter. Typing a one means the waveform will be played once, a two means it will play twice, etc. Typing zero means that the waveform will be repeated infinitely. Under 'Waveform 0 Ending Ad -dress,' type 0x20F5 and press enter. This signifies the address that the last data point for the waveform is stored in. Press the 'Write' button to write to these registers.
- 14) Under the 'RAM Play Control' tab, toggle the 'Play' button from 'Stop' to 'Start.' Now press the write button.  A 130 Hz sine wave should appear on the output of the converter.
- a. Do not change the output capacitance in the middle of haptic playback. Stop the output waveform before changing an output capacitance or piezo element.

## MAX77501 Evaluation Kit

- 15) Under the 'RAM Play Control' tab, toggle the 'Play' button from 'Start' to 'Stop.' Now press the write button. This stops the 130 hz sine wave on the output of the converter and transitions the device to standby mode.
- 16)  We will now play a waveform from the FIFO. Under the 'FIFO control' tab, press 'Open' under the 'FIFO Data File Section.' Navigate through your file system to the folder where the file '130Hz\_80Vpp\_32kHz. fifo' is saved and press open.
- 17) Toggle the 'FIFO Data Play' button from 'Stop' to 'Start' and press 'Write.' This plays a couple cycles of a 130hz sine wave on the output of the piezo before transitioning the part back to standby mode.
- 18)  Consult the device data sheet for more information on the RAM playback registers.

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI.

For  more  information  on  the  GUI,  see  the Software section.

## EV Kit Features

## Cheetah SPI Host Adapter Connection

On the EV kit, there is a connection (J32) for the Cheetah SPI  Host  Adapter.  This  tool  allows  the  user  to  send manual  SPI  commands  to  the  MAX77501  for  quick debugging. In order to use the Cheetah SPI Host Adapter, the user must remove R38, R39, R40, and R41 and install a  20kΩ  resistor  on  R47.  In  addition,  the  micro-B  USB cable must be connected to J10.

## VREFBUF Feedback and DAC Measurement Amplifier

The MAX77501 EV kit includes an on-board buffer amplifier used for measuring the FB pin and the output of the IC's DAC without overloading them. As shown in Table 1, jumper  J4  sends  either  the  FB  pin  or  the  DAC  output to  the  VREFBUF  test  point.  Set  J4  in  the  1-2  position to  measure  a  scaled  down  version  of  the  output  waveform, which allows for easy measuring of critical parameters like THD+N. Set J4 in the 2-3 position to measure VO\_DAC (the output of the internal DAC). Attempting to measure either of these voltages directly (without the buffer) may result in distorted measurements, since both are high-impedance outputs.

Figure 3. VREFBUF Feedback and DAC Measurement Amplifier Diagram

<!-- image -->

## Evaluates: MAX77501

│

## Input Battery Voltage Blocking FET

By default,  when  the  MAX77501 is in either  standby  or shutdown modes (consult the device data sheet for a full description of the MAX77501 state diagram), the output voltage  of  the  system  sits  at  the  battery  voltage  minus the body diode voltage of the high-side PFET (Q2). Some applications desire the output voltage to sit at 0V while the part is in standby or shutdown mode. The EV kit comes installed  with  Q4  to  accomplish  this.  Q4  is  an  NFET between V IN  and the inductor. The gate of Q4 is attached to  V DD\_H   such  that  Q4  only  turns  on  after  V DD\_H   is enabled during a haptic event (providing a path from V IN to the inductor). When the haptic event finishes, Q4 opens and disconnects the  battery  from  the  power  stage,  and the  output  voltage  on  the  piezo  falls  to  0V  through  the feedback resistors to ground. If your application requires VOUT to sit at 0V, follow these instructions:

Evaluates: MAX77501

- Ensure R55 is installed (0Ω) and R53 is open (this is the default configuration of the EV kit)
- If R53 is populated by some value, the feedback node  connects  to  FB\_SW  and  not  directly  to ground. R53 must be open for the output to fully discharge to ground
- Refer to the EV kit schematic in this document for a full view of the circuit.
- Remove R46 so it is open
- R46 provides a path from the input to the inductor even if the device is off and Q4 is open. Removing R46  ensures  true  disconnection  between  the input and the inductor.

The NFET used for Q4 is DMN1019UFDE from Diodes Incorporated.

Figure 4. Input Battery Voltage Blocking Diagram

<!-- image -->

│

## MAX77501 Evaluation Kit

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77501.

The GUI  is designed to have individual tabs for multiple  parts  of  the  IC  (Global  Resources,  Interrupts, FIFO Control, RAM Control, and the Register Map).

## Installation

If  you haven't already, navigate to the product webpage ( www.maximintegrated.com/MAX77501 ),  click  on  the Design Resources tab, and download the latest version of  the  EV  kit  software.  Save  the  EV  kit  software  to  a temporary  folder  and  uncompress  the  ZIP  file.  Run  the executable and follow the prompts.

## Windows Drivers

Upon  connection  of  a  micro-USB  cable  between  your PC and the EV kit for the first time, you will need to wait a  few  minutes  for  Windows  to  automatically  install  the necessary drivers.

## Graphical User Interface Details (GUI)

The GUI drives SPI communication with the EV kit. Every control in the GUI corresponds directly to a register within the  MAX77501. Refer to the register map in the device data sheet for a complete description of the registers.

## Global Resources Tab

The Global Resources tab allows the user to write to and read from the various status registers that configure the MAX77501 and its functionality. Refer to the data sheet for a full description of the registers.

Figure 5. EV Kit GUI Global Resources Tab

<!-- image -->

Evaluates: MAX77501

│

## MAX77501 Evaluation Kit

## Interrupts Tab

The Interrupts tab allows the user to check to see if an interrupt has triggered. To read an interrupt, write the IMR bit to 0 to unmask the interrupt. Any unmasked interrupt in the Interrupts box can then be read using the 'Read' button. Refer to the MAX77501 data sheet for more detailed information on the interrupt registers.

Figure 6. EV kit GUI Interrupts Tab

<!-- image -->

## RAM Control Tab

The RAM control tab allows the user to to load data into the  RAM  and  configure  the  register  settings  to  dictate which waveforms stored in the RAM are played back at the piezo output. The GUI takes input in the form of .RAM files  that  list  the  contents  of  each  RAM  register.  After creating  or  downloading  the  file,  the  user  can  load  it into the GUI and play it back at the output of the EV kit. Beyond  loading  and  playing  the  file,  the  GUI  provides controls for the number of waveforms to be played, the number  of  waveforms  in  the  RAM,  the  ending  address of  each  waveform,  and  the  playlist  of  waveforms  to  be played. In order to fill a data point into one of the input fields,  make  sure  to  press  enter  before  pressing  the 'Write' button to write to the register. For more information on RAM playback, see the MAX77501 data sheet.

Follow these steps to play a waveform from RAM:

- 1) Create a RAM playback file where each datapoint to be stored in each RAM address is a new line in the file. The data for address 0x2000 is on line 1, address 0x2001 is on line 2, address 0x2002 is on line 3, etc. The extension of this file must be .RAM.
- 2) Set the correct configuration registers in the 'Global Resources' tab. For more information on these registers, see the IC datasheet.
- 3) Read the interrupt status register on the 'Interrupts' tab in order to read and clear the 'SPI Ready Interrupt'. This register must be read after enabling the IC prior to starting haptic playback.
- 4) Open the RAM playback file in the 'RAM Data File' section and press 'Write'.
- 5) Fill in the Number of Waveforms to Play text box and press enter. Fill in the Number of Waveforms in RAM and press enter. Press the 'Write' button to write to these registers.
- 6) Fill in the Ending Address registers for each waveform and press enter. Fill out the Waveform ID registers and the Repeat registers to setup a playlist and press enter. Press the 'Write' button to write to these registers. For more information on these registers and creating a waveform playlist, consult the device data sheet.
- 7) Toggle the 'Play' button from 'Stop' to 'Start'. Press the 'Write' button to start a RAM playback.

Figure 7. Example RAM Write File

<!-- image -->

## MAX77501 Evaluation Kit

Evaluates: MAX77501

Figure 8. EV Kit GUI RAM Control Tab

<!-- image -->

## FIFO Control Tab

The FIFO Control Tab allows the user to stream data in to  the  FIFO\_WRITE\_PORT  register  using  a  stream  of SPI commands. First, the user must create a file with the extension .FIFO with the contents that the user wants to stream into the FIFO port. The user should have each line represent the data that they want written to the FIFO port. After the user opens the file, they can presss FIFO Data Play, which will cause the GUI to start writing the data file to the FIFO\_WRITE\_PORT. For more information on the FIFO buffer, refer to the MAX77501 data sheet.

Follow these steps to play a waveform through the FIFO:

- 1) Create a FIFO file where each datapoint to be stored in the FIFO queue is stored on a new line in the file. Each line will be written to the FIFO\_WRITE\_PORT register in succession. The extension of this file must be .FIFO.
- 2) Set the correct configuration registers in the 'Global Resources' tab. For more information on these registers, see the IC data sheet.
- 3) Read the interrupt status register on the 'Interrupts' tab in order to read and clear the 'SPI Ready Interrupt'. This register must be read after enabling the IC prior to starting haptic playback.
- 4) Open the FIFO playback file in the 'FIFO Data File' section and press 'Write'.

## Register Map Tab

The MAX77501 EV kit GUI contains a Register Map tab. This  tab  allows  the  user  to  read  all  of  the  registers  by using the 'Read' or 'Read All' buttons. In addition, if the user  wants  to  manually  change  a  register  bit,  they  can click on the bit in the register map and it flips the bit and writes it to the corresponding register of the part.

│

Evaluates: MAX77501

Figure 9. Example FIFO Write File

<!-- image -->

Figure 10. EV kit GUI FIFO Control Tab

<!-- image -->

## MAX77501 Evaluation Kit

## Register Map Tab

The MAX77501 EV kit GUI contains a Register Map tab. This tab allows the user to read all of the registers by using the 'Read' or 'Read All' buttons. In addition, if the user wants to manually change a register bit, they can click on the bit in the register map and it flips the bit and writes it to the corresponding register of the part.

Figure 11. EV kit GUI Register Map Tab

<!-- image -->

## Ordering Information

Note: + Denotes lead-free and RoHS compliant

<!-- image -->

| PART           | TYPE   |
|----------------|--------|
| MAX77501EVKIT# | EV Kit |

│

## MAX77501 EV Kit Bill of Materials

| ITEM   | REF_DES           | DNI/DNP   | TYPICAL APPS CIRCUIT   | QTY   | MFG PART #                                                               | MANUFACTURER                                         | VALUE           | DESCRIPTION                                                                                                                | COMMENTS   |
|--------|-------------------|-----------|------------------------|-------|--------------------------------------------------------------------------|------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2            | -         | YES                    | 2     | C0402X5R100-105KNE; GRM155R61A105KE15                                    | VENKEL LTD.;MURATA                                   | 1UF             | CAPACITOR; SMT(0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |            |
| 2      | C3                | -         | YES                    | 1     | C1608X5R1A226M080AC; GRM188R61A226ME15                                   | TDK;MURATA                                           | 22UF            | CAPACITOR; SMT(0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                    |            |
| 3      | C4                | -         | YES                    | 1     | CL32A107MPVNNN; C1210C107M8PAC; LMK325BJ107MM                            | SAMSUNG ELECTRONICS;KEMET; TAIYO YUDEN               | 100UF           | CAPACITOR; SMT(1210); CERAMIC CHIP; 100UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                   |            |
| 4      | C5, C6            | -         | YES                    | 2     | C1005X7R1C154K050BC                                                      | TDK                                                  | 0.15UF          | CAPACITOR; SMT(0402); CERAMIC CHIP; 0.15UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC;                                        |            |
| 5      | C7, C11, C14, C23 | -         | YES                    | 4     | EMK105BJ105KV                                                            | TAIYO YUDEN                                          | 1UF             | TC=X7R CAPACITOR; SMT(0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R ;                            |            |
| 6      | C8                | -         | YES                    | 1     | ZRB157R61A225KE11; GRM155R61A225KE95; CL05A225KP5NSN                     | MURATA;MURATA;SAMSUNG ELECTRONICS                    | 2.2UF           | CAPACITOR; SMT(0402); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                   |            |
| 7      | C9                | -         | YES                    | 1     | GRM155R71H332KA01                                                        | MURATA                                               | 3300PF          | CAPACITOR; SMT(0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |            |
| 8      | C10               | -         | YES                    | 1     | C1608X5R1A106K080AC                                                      | TDK                                                  | 10UF            | CAPACITOR; SMT(0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                            |            |
| 9      | C12               | -         | YES                    | 1     | C0402C0G500-470JNE; CC0402JRNPO9BN470; GRM1555C1H470JA01; CL05C470JB5NNN | VENKEL LTD.;YAGEO PHYCOMP;MURATA;SAMSUNG ELECTRONICS | 47PF            | CAPACITOR; SMT(0402); CERAMIC CHIP; 47PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                            |            |
| 10     | C13               | -         | YES                    | 1     | C0402X7R500-222KNE; GRM155R71H222KA01                                    | VENKEL LTD.;MURATA                                   | 2200PF          | CAPACITOR; SMT(0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |            |
| 11 12  | C15, C52          | -         | YES                    | 2     | C0402C0G500-391JNE; GRM1555C1H391JA01; CGA2B2C0G1H391J050BA              | VENKEL LTD.;MURATA;TDK                               | 390PF           | CAPACITOR; SMT(0402); CERAMIC CHIP; 390PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                           |            |
| 13     | C16               | -         | YES                    | 1     | C0402C680J5GAC; GRM1555C1H680JA01                                        | KEMET;MURATA                                         | 68PF            | CAPACITOR; SMT; 0402; CERAMIC; 68pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                   |            |
|        | C17, C19          | -         | YES                    | 2     | C0603C103K2RAC                                                           | KEMET                                                | 0.01UF          | CAPACITOR; SMT(0603); CERAMIC CHIP; 0.01UF; 200V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                        |            |
| 14     | C18               | -         | YES                    | 1     | CGJ4J3X7T2D104K125                                                       | TDK                                                  | 0.1UF           | CAPACITOR; SMT(0805); CERAMIC CHIP; 0.1UF; 200V; TOL=10%; MODEL=CGJ SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7T               |            |
| 15     | C53, C54          | -         | YES                    | 2     | GRM155R61C104KA88                                                        | MURATA                                               | 0.1UF           | CAPACITOR; SMT(0402); CERAMIC; 0.1UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +85 DEGC; TC=X5R                      |            |
| 16 17  | D1 D4             | -         | YES                    | 1     | BZX84C 10 1SMA5.0AT3G                                                    | FAIRCHILD SEMICONDUCTOR                              | 10V             | DIODE; ZNR; SMT(SOT-23); PIV=10V; IF=0.25A DIODE; TVS; SMA; VRM=5V; IPP=43.5A                                              |            |
| 18     | L1                | - -       | YES YES                | 1 1   | XEL5050-103ME                                                            | ON SEMICONDUCTOR COILCRAFT                           | 5V 10UH         | INDUCTOR; SMT; COMPOSITE; 10UH; 20%; 4.9A ;                                                                                |            |
| 19     | Q1                | -         | YES                    | 1     | SI7818DN-T1-E3                                                           | VISHAY SILICONIX                                     | SI7818DN-T1-E3  | TRAN; N-CHANNEL 150V (D-S) MOSFET; NCH; POWERPAK1212-8; PD-(1.5W); I-(2.2A); V-(150V)                                      |            |
| 20     | Q2                | -         | YES                    | 1     | SI7317DN-T1-GE3                                                          | VISHAY SILICONIX                                     | SI7317DN-T1-GE3 | TRAN; P-CHANNEL 150V MOSFET; PCH; POWERPAK1212-8; PD-(19.8W); I-(-2.8A); V-(-150V)                                         |            |
| 21     | Q4                | -         | YES                    | 1     | DMN1019UFDE                                                              | DIODES INCORPORATED                                  | DMN1019UFDE     | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; U-DFN2020-6 (TYPE E); PD-(0.69W); I-(11A); V-(12V)                           |            |
| 22     | R1                | -         | YES                    | 1     | CRCW04021R00FK                                                           | VISHAY DALE                                          | 1               | RESISTOR, 0402, 1 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |            |
| 23     | R2                | -         | YES                    | 1     | CRCW040260K4FK                                                           | VISHAY DALE                                          | 60.4K           | RESISTOR; 0402; 60.4K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                  |            |
| 24     | R4                | -         | YES                    | 1     | ERJ-2RKF7153                                                             | PANASONIC                                            | 715K            | RES; SMT(0402); 715K; 1%; +/-100PPM/DEGC; 0.10W                                                                            |            |
| 25     | R5                | -         | YES                    | 1     | CRCW040220K0FK                                                           | VISHAY DALE                                          | 20K             | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                    |            |
| 26     | R6                | -         | YES                    | 1     | RL1220S-R10-F                                                            | SUSUMU CO LTD.                                       | 0.1             | RESISTOR; 0805; 0.1 OHM; 1%; 200PPM; 0.33W; THICK FILM                                                                     |            |
| 27     | R7                | -         | YES                    | 1     | ERJ-2GEJ203                                                              | PANASONIC                                            | 20K             | RESISTOR; 0402; 20K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                     |            |
| 28     | R8                | -         | YES                    | 1     | CRCW0402200KFK; RF73H1ELTP2003                                           | VISHAY DALE;KOA SPEER ELECTRONICS                    | 200K            | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                      |            |
| 29     | R21, R24          | -         | YES                    | 2     | CRCW04021M00FK                                                           | VISHAY DALE                                          | 1M              | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |            |
| 30     | R22, R23          | -         | YES                    | 2     | ANY                                                                      | ANY                                                  | 100K            | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                          |            |
| 31     | R26               | -         | YES                    | 1     | ERJ-2RKF1000                                                             | PANASONIC                                            | 100             | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                     |            |
| 32     | R49               | -         | YES                    | 1     | ERJ-2RKF10R0                                                             | PANASONIC                                            | 10              | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                      |            |
| 33     | U1                | -         | YES                    | 1     | MAX77501                                                                 | MAXIM                                                | MAX77501        | EVKIT PART-IC; MAX77501; HIGH EFFICIENCY PIEZO HAPTICS DRIVER; PACKAGE DRAWING NUMBER: 21- 100276B; PACKAGE CODE: W302M2+1 |            |
| 34 35  | D2                | DNP       | YES                    | 0     | DB2S20500L                                                               | PANASONIC                                            | DB2S20500L      | DIODE; SCH; SMT(SOD-523); PIV=20V; IF=0.2A RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK                                |            |
|        | R51               | -         | YES                    | 1     | CRCW0402200KFK; RF73H1ELTP2003                                           | VISHAY DALE;KOA SPEER ELECTRONICS                    | 200K            | FILM                                                                                                                       |            |
| 36     | R50, R53 C51      | DNP DNP   | NO NO                  | 0 0   | N/A N/A                                                                  | N/A N/A                                              | OPEN OPEN       | RESISTOR; 0402; OPEN; FORMFACTOR CAPACITOR; SMT(0402); OPEN; FORMFACTOR                                                    |            |
| 37 38  | R55               | -         | NO                     | 15    | ERJ-2GE0R00                                                              | PANASONIC                                            | 0               | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                       |            |
| 39     | R46               | -         | NO                     | 1     | CRCW12100000Z0                                                           | VISHAY DALE                                          | 0               | RESISTOR; 1210; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM                                                                        |            |
| 40     | R3                | -         | NO                     | 1     | CRCW04026R80FK                                                           | VISHAY DALE                                          | 6.8             | RESISTOR, 0402, 6.8 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                   |            |

Evaluates: MAX77501

## MAX77501 EV Kit Bill of Materials (continued)

| ITEM                                 | REF_DES                                        | DNI/DNP                              | TYPICAL APPS CIRCUIT   | QTY Components   | MFG PART # below this line are outside of the immediate   | MANUFACTURER MAX77501 solution and power train components   | VALUE (i.e. FETs, inductor,   | DESCRIPTION etc.).                                                                                                    | COMMENTS   |
|--------------------------------------|------------------------------------------------|--------------------------------------|------------------------|------------------|-----------------------------------------------------------|-------------------------------------------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------|
| 41                                   | C20                                            | -                                    | NO                     | 1                | GRM43DR72E334KW01                                         | MURATA                                                      | FT2232HL                      | CAPACITOR; SMT(1812); CERAMIC CHIP; 0.33UF; 250V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                           |            |
| 42                                   | C21                                            | -                                    | NO                     | 1                | GRM55DR72E684KW01; C5750X7R2E684K230KA                    | MURATA;TDK                                                  | 0.68UF                        | CAP; SMT(2220); 0.68UF; 10%; 250V; X7R; CERAMIC CHIP                                                                  |            |
| 43                                   | C22, C29, C31, C37, C39, C47                   | -                                    | NO                     | 6                | GRM155R61C105ME01                                         | MURATA                                                      | 1UF                           | CAPACITOR; SMT(0402); CERAMIC CHIP; 1UF; 16V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |            |
| 44                                   | C24-C26, C28, C33-C35, C38, C40-C42, C44       | -                                    | NO                     | 12               | GRM155R71A104JA01                                         | MURATA                                                      | 0.1UF                         | CAPACITOR; SMT(0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
| 45                                   | C27, C36, C43                                  | -                                    | NO                     | 3                | C1005X5R1A475K050                                         | TDK                                                         | 4.7UF                         | CAPACITOR; SMT(0402); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |            |
| 46                                   | C30, C32                                       | -                                    | NO                     | 2                | ECJ-0EC1H270J                                             | PANASONIC                                                   | 27PF                          | CAPACITOR; SMT(0402); CERAMIC; 27PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                    |            |
| 47                                   | C45, C46, C48, C340                            | -                                    | NO                     | 4                | GRM155R61A104KA01                                         | MURATA                                                      | 0.1UF                         | CAPACITOR; SMT(0402); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R;                             |            |
| 48                                   | C50                                            | -                                    | NO                     | 1                | GRM55DR72E105KW01L                                        | MURATA                                                      | 1UF                           | CAPACITOR; SMT(2220); CERAMIC CHIP; 1UF; 250V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/-                   |            |
| 49                                   | DS1, DS2                                       | -                                    | NO                     | 2                | LTST-C190CKT                                              | LITE-ON ELECTRONICS INC.                                    | LTST-C190CKT                  | DIODE; LED; STANDARD; RED; SMT(0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                        |            |
| 50                                   | GND1, GND2, PGND, PGND2, VIN, VPIEZO, VREFBUF  | -                                    | NO                     | 7                | 9020 BUSS                                                 | WEICO WIRE                                                  | MAXIMPAD                      | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFTDRAWN BUS TYPE-S; 20AWG                               |            |
| 51                                   | J1                                             | -                                    | NO                     | 1                | PPPC021LFBN-RC                                            | SULLINS ELECTRONICS CORP                                    | PPPC021LFBN-RC                | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 2PINS                                   |            |
| 52                                   | J2, J12                                        | -                                    | NO                     | 2                | S2B-PH-K-S(LF)(SN)                                        | JST MANUFACTURING                                           | S2B-PH-K-S(LF)(SN)            | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS |            |
| 53                                   | J3, J5-J9                                      | -                                    | NO                     | 6                | PBC02SAAN                                                 | SULLINS ELECTRONICS CORP.                                   | PBC02SAAN                     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                          |            |
| 54                                   | J4                                             | -                                    | NO                     | 1                | PEC03SAAN                                                 | SULLINS ELECTRONICS CORP.                                   | PEC03SAAN                     | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                          |            |
| 55                                   | J10                                            | -                                    | NO                     | 1                | 10118193-0001LF                                           | FCI CONNECT                                                 | 10118193-0001LF               | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                               |            |
| 56                                   | J13                                            | -                                    | NO                     | 1                | PBC08SAAN                                                 | SULLINS ELECTRONICS CORP.                                   | PBC08SAAN                     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                      |            |
| 57                                   | J32                                            | -                                    | NO                     | 1                | 2-1761603-3                                               | TE CONNECTIVITY                                             | 2-1761603-3                   | CONNECTOR; MALE; THROUGH HOLE; BLUE HEADER ASSEMBLY; LOW PROFILE; STRAIGHT; 10PINS                                    |            |
| 58                                   | L2-L4                                          | -                                    | NO                     | 3                | BLM18AG601SN1                                             | MURATA                                                      | 600                           | INDUCTOR; SMT(0603); FERRITE-BEAD; 600; TOL=+/- ; 0.5A                                                                |            |
| 59                                   | NEN                                            | -                                    | NO                     | 1                |                                                           | 5002 KEYSTONE                                               | N/A                           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                 |            |
| 60                                   | R9, R12                                        | -                                    | NO                     | 2                | ERJ-2RKF27R0X;RC0402FR- 0727RL;CRCW040227R0FK             | PANASONIC;YAGEO PHICOMP;VISHAY DALE                         | 27                            | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                               |            |
| 61                                   | R10                                            | -                                    | NO                     | 1                | CRCW04021M00FK                                            | VISHAY DALE                                                 | 1M                            | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |            |
| 62                                   | R11, R13, R36, R42                             | -                                    | NO                     | 4                | CRCW04021K00FK; RC0402FR- 071KL;MCR01MZPF1001             | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI                         | 1K                            | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |            |
| 63                                   | R14, R18, R25, R28, R29, R31-R34, R38-R41, R45 | -                                    | NO                     | 15               | ERJ-2GE0R00                                               | PANASONIC                                                   | 0                             | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                  |            |
| 64                                   | R15                                            | -                                    | NO                     | 1                | CRCW04024752FK; 9C04021A4752FLHF3;                        | VISHAY DALE;YAGEO;VISHAY DALE                               | 47.5K                         | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                |            |
| 65                                   | R17                                            | -                                    | NO                     | 1                | CRCW040247K5FK CRCW040212K0FK; MCR01MZPF1202              | VISHAY DALE;ROHM SEMICONDUCTOR                              | 12K                           | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              |            |
| 66                                   | R16, R20, R54                                  | -                                    | NO                     | 3                | ANY                                                       | ANY                                                         | 100K                          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                     |            |
| 67                                   | R27, R35                                       | -                                    | NO                     | 2                | CRCW0402470RFK                                            | VISHAY DALE                                                 | 470                           | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              |            |
| 68                                   | R30                                            | -                                    | NO                     | 1                | CRCW0402169KFK                                            | VISHAY DALE                                                 | 169K                          | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                              |            |
| 69                                   | R43                                            | -                                    | NO                     | 1                | ERJ-2RKF6040                                              | PANASONIC                                                   | 604                           | RESISTOR; 0402; 604 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                 |            |
| 70                                   | R44                                            | -                                    | NO                     | 1                | CRCW040210K0FK;RC0402FR-0710KL                            | VISHAY DALE;YAGEO PHICOMP                                   | 10K                           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                  |            |
| 71                                   | U2, U3                                         | -                                    | NO                     | 2                | MAX8512EXK+                                               | MAXIM                                                       | MAX8512EXK                    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                         |            |
| 72                                   | U4                                             | -                                    | NO                     | 1                | FT2232HL                                                  | FUTURE TECHNOLOGY DEVICES LTD.                              | INTL FT2232HL                 | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                       |            |
| 73                                   | U5                                             | -                                    | NO                     | 1                | MAX44259AUK+                                              | MAXIM                                                       | MAX44259AUK+                  | IC; OPAMP; 1.8V; 15MHZ LOW OFFSET; LOW POWER; RAIL TO RAIL I/O OP AMP; SOT23-5                                        |            |
| 74                                   | U6                                             | -                                    | NO                     | 1                | MAX3023EUD+                                               | MAXIM                                                       | MAX3023EUD                    | IC; TRANS; QUAD-LEVEL TRANSLATOR; TSSOP14                                                                             |            |
| 75                                   | U7                                             | -                                    | NO                     | 1                | MAX3395EETC+                                              | MAXIM                                                       | MAX3395EETC                   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENTQUAD-LEVEL TRANSLATOR WITH SPEED- UP CIRCUITRY; TQFN12 4X4            |            |
| 76                                   | V5, VCC, VDD, VDD_H, VSS_H                     | -                                    | NO                     | 5                |                                                           | 5010 KEYSTONE                                               | N/A                           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                 |            |
| 77                                   | Y1                                             | -                                    | NO                     | 1                | 7M-12.000MAAJ                                             | TXC CORPORATION                                             | 12MHZ                         | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                                                         |            |
| 78                                   | PCB                                            | -                                    | NO                     | 1                | MAX77501                                                  | MAXIM                                                       | PCB                           | PCB:MAX77501                                                                                                          |            |
| 79 R19, R37, R47, R48, R52 DNP TOTAL | 79 R19, R37, R47, R48, R52 DNP TOTAL           | 79 R19, R37, R47, R48, R52 DNP TOTAL | NO                     | 0 146            | N/A                                                       | N/A                                                         | OPEN                          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                      |            |

Evaluates: MAX77501

## MAX77501 EV Kit Schematic

Evaluates: MAX77501

<!-- image -->

MAX77501 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77501

## MAX77501 Evaluation Kit

## MAX77501 EV PCB Layout

MAX77501 EV Kit-Top Silkscreen

<!-- image -->

MAX77501 EV Kit-Top

<!-- image -->

## Evaluates: MAX77501

MAX77501 EV Kit-Layer2

<!-- image -->

MAX77501 EV Kit-Layer3

<!-- image -->

│

## MAX77501 EV PCB Layout (continued)

MAX77501 EV Kit-Bottom

<!-- image -->

MAX77501 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77501