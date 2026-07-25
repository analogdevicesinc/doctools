<!-- lastmod 2022-08-05 -->
## MAX31341 Shield Evaluation Kit

## General Description

The  MAX31341  Shield  evaluation  kit  (EV  kit)  is  a  fully assembled and tested PCB to evaluate the MAX31341B and MAX31341C, low-cost, extremely accurate, real-time clocks  (RTCs)  with  I 2 C  interface  and  power  management.  The  EV  kit  operates  from  a  single  supply,  either from USB or an external power supply, and the onboard crystal provides a 32.768kHz clock signal. This device is accessed through an I 2 C  serial  interface  provided  by  a MAX32625PICO board from a PC USB port.

The MAX31341 Shield EV kit provides the hardware and software user interface (GUI) necessary to evaluate the MAX31341B  and  MAX31341C.  The  EV  kit  includes  a MAX31341B and a MAX31341C installed. It connects to the  PC  through  a  MAX32625  PICO  board  and  a  Micro USB cable.

## Features

- Easy Evaluation of the MAX31341B and MAX31341C
- +1.6V to +3.6V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- Assembled MAX32625PICO I 2 C circuit board
- Micro USB cable
- Assembled circuit board, including the MAX31341B and MAX31341C

Ordering Information appears at end of data sheet.

## Evaluates: MAX31341B/MAX31341C

## Quick Start

## Required Equipment

- One DC power supply capable of supplying +1.6V to +3.6V (typical +3.0V used in the following instructions)
- One pico ammeter for measuring the current
- One oscilloscope
- One Micro USB cable
- One assembled MAX32625PICO I 2 C circuit board
- One MAX31341 Shield EV kit

## EV Kit Photo

<!-- image -->

<!-- image -->

## MAX31341 Shield Evaluation Kit

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  these steps to verify board operation.

- 1) Place the MAX31341 Shield EV kit on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set the jumpers to their default positions, as shown in Figure 1a for testing the WLP IC and Figure 1b for testing the TDFN IC.
- 3) With the output of the power supply set to +3.0V and disabled, connect the positive terminal of the DC supply to the VCC\_EXT and negative terminal to the GND of the EV kit.
- 4) Connect the MAX32625PICO I 2 C circuit board to the EV kit at the location shown as DS3900 (Figure 2).
- 5) Connect the Micro USB cable between the MAX32625PICO Board and PC/laptop.
- 6) Turn on the +3.0V DC power supply.
- 7) Visit here to  download  the  latest  version  of  the MAX31341 RTC EV kit software, and run the control software.
- 8)  Open the MAX31341B/C RTC Shield software. The MAX31341B/C RTC Shield Software Configuration  &amp;  Time tab  will  open,  showing USB Connected (Figure 3) in the lower right corner.
- 9) At  power-up, the MAX31341B/C is in idle mode; no clock  is  running  yet.  On  the Configuration &amp; Time tab, in the RTC Configuration section, enable Oscillator  Enable to  start  the  clock.  Verify  the  clock  has started counting by checking the Auto Update box in the Real Time Monitoring section.

Figure 1a. WLP\_Jumper Setting

<!-- image -->

## Evaluates: MAX31341B/MAX31341C

Figure 1b. TDFN\_Jumper Setting

<!-- image -->

│

## Evaluates: MAX31341B/MAX31341C MAX31341 Shield Evaluation Kit

Figure 2. USB Connection

<!-- image -->

│

## Detailed Description

The MAX31341B/MAX31341C low-current RTCs are timekeeping devices that provide time-keeping current in nanoamperes,  thus  extending  battery  life.  The  MAX31341B/ MAX31341C support 6pF high-ESR crystals, which broaden  the  pool  of  usable  crystals  for  the  devices.  These devices are accessed through an I 2 C serial interface. The devices feature one digital Schmitt trigger input and one programmable threshold analog input. The devices generate  an  interrupt  output  on  a  falling  or  rising  edge  of  the digital input (D1), or when the analog input (AIN) voltage crosses  a  programmed  threshold  in  either  direction.  An integrated  power-on  reset  function  ensures  deterministic default register status upon power-up.

Other  features  include  two  time-of-day  alarms,  interrupt outputs,  a  programmable  square-wave  output,  a  serial bus  timeout  mechanism,  and  a  64-byte  RAM  for  user data storage. The clock/calendar provides seconds, minutes, hours, day, date, month, and year information. The date  at  the  end  of  the  month  is  automatically  adjusted for  months  with  fewer  than  31  days,  including  corrections for leap year. The clock operates in 24-hour format. The MAX31341B/MAX31341C also include an input for synchronization.  When  a  reference  clock  (e.g.,  32kHz, 50Hz/60Hz  power  line,  GPS  1PPS)  is  present  at  the CLKIN pin and the enable external clock input bit (ECLK) is set to 1, the MAX31341B/MAX31341C RTC is frequency-locked to the external clock and the clock accuracy is determined by the external source.

## Functional Test Procedure

## Current Draw at Time-Keeping Operation

- 1)  To measure the current draw under normal RTC conditions without any interrupt or clock input/output, do the following:
- In the RTC Configuration section, press the Read button.
- Disable CLKIN and CLKOUT .
- Select 1Hz for Frequency .
- 2)  Remove the jumper from JU7 (for the MAX31341B) or JU8 (for the MAX31341C) and connect the pico ammeter between pins 1 and 2 of JU7 or JU8.
- 3)  On the Registers tab (Figure 5), in the Register Map section, press the Read button and make sure that the value of register 0 (Config\_reg1) shows 0x41. Other -wise, set it to 0x41 and press the Write button. Now the  reading  in  the  picometer  is  the  current  from  the MAX31341B or MAX31341C only. It should be around 210nA.

## Evaluates: MAX31341B/MAX31341C

Note:  All  instruments  must  be  disconnected  from the I/O ports of the IC, since any loading would add current consumption. Also, be sure that the waiting duration from power-up to the current reading is long enough (30min) due to on-board capacitor charging.

- 4) Remove the pico ammeter and put the jumper back on JU7 or JU8.

## Setting the Clock

On  the Configuration  &amp;  Time tab  in  the Date/Time Configuration section, enter the start point of date and time, and then click Set . The clock starts to count from the set point after the Status Log shows Write successful . In the Real Time Monitoring section, verify that the clock is counting from the written start date and time.

## Clock Output Measurement

On the Configuration &amp;  Time tab in the RTC Configuration section,  enable CLKOUT and  select  the desired CLKOUT Frequency .  The  clock  output  can  be monitored  using  an  oscilloscope  connected  to  INTB/ CLKOUT. A frequency counter can also be used to measure the clock frequency accurately.

## Alarm Interrupt Output

On the Alarms &amp; Timer tab in the Alarm 1 Configuration section,  select  the Repetition  Rate to  set  the  alarm scenario  (such  as Min , Sec at  02:00).  In  the Interrupts subsection of  the Interrupts  &amp;  Flags section,  check  the Alarm 1 Interrupt box. In the Flags subsection, press the Read button twice to clear the alarm flag bit if it has been previously set. When the RTC reaches the alarm time set in Alarm 1 Configuration , the alarm output at INTA/CLKIN will go from high to low. It will change to high again by pressing the Read button in the Flags subsection. The interrupt status can also be checked by pressing Read button in the Flags subsection. Repeat the same steps for Alarm 2, but measure the alarm interrupt output at INTB/CLKOUT.

Note:  When  testing  alarm  interrupts,  CLKIN  and CLKOUT in the RTC Configuration section need to be disabled.

## Timer Interrupt

Clear  all  interrupt  bits  by  pressing  the Read button  in the Flags subsection. Enable the Timer and Interrupt by checking Timer Enable in the Timer Configuration section  and Timer  Interrupt in  the Interrupts subsection, then  select 16Hz on Timer  Frequency .  Set  the Timer Init number such as 200. When the Timer Count reading reaches 0 from 200, the interrupt output at INTA/CLKIN should go from high to low.

## MAX31341 Shield Evaluation Kit

## Power Mode Select

On  the Configuration  &amp;  Time tab in the Power Management section,  in  the Comparator  Mode dropdown  list  there  are  two  options: AIN  Interrupt  Mode for  normal  I/O  operation,  and Power  Management  &amp; Trickle Charger mode for Power Management and Trickle Charger mode which charges the on-board supercapacitor as a backup battery.

In Power  Management  &amp;  Trickle  Charger mode,  the Supply Select drop-down list can be used to select the source  of  the  power  supply. Force  VCC means  the  IC

## Evaluates: MAX31341B/MAX31341C

uses the main supply and Force VBAT means the IC gets the  supply  from  the  backup  battery;  from  either  source, the on-board supercapacitor or external backup supply is injected  from  the TP2  (VBAT) test  point.  In Auto ,  the supply  switches  between  VCC  and  VBAT  automatically based on the threshold set in the Analog Interrupt section. To verify which supply is utilized, the clock output can be monitored while changing the power-supply mode with VCC and VBAT in different voltages. Also, the superca -pacitor voltage at Analog IN (JU2-AIN) can be charged to 'VCC minus diode drop voltage' at a selectable rate in the pull-down table.

Figure 3. MAX31341B/C RTC Shield Software-Configuration &amp; Time Tab

<!-- image -->

│

Figure 4. MAX31341B/C RTC Shield Software-Alarms &amp; Timer Tab

<!-- image -->

Figure 5. MAX31341B/C RTC Shield Software-Registers Tab

<!-- image -->

## Jumper Settings for Testing WLP IC

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                |
|----------|------------------|------------------------------------------------------------------------------------------------------------|
| JU2      | 1-2              | Connects AIN to VBAT at TP2.                                                                               |
| JU2      | 1-3              | Connects AIN to GND.                                                                                       |
| JU2      | 1-4*             | Connects AIN to supercapacitor.                                                                            |
| JU4      | 1-2*             | System V CC ** is powered by VCC_EXT at TP5.                                                               |
| JU4      | 2-3              | System V CC is powered by +3.3V supply from Mbed/Arduino/PICO platform.                                    |
| JU6      | 1-2              | Connects INTA /CLKIN pin of U1 to ground.                                                                  |
| JU6      | 1-3*             | Connects INTA /CLKIN pin of U1 to Mbed/Arduino/PICO platform, through a level translator (U5).             |
| JU6      | 1-4              | Connects INTA /CLKIN pin of U1 to test point TP3 with a 10kΩ pullup resistor to system V CC .              |
| JU7      | 1-2*             | System V CC connects to VCC pin of U1.                                                                     |
| JU7      | OPEN             | Float VCC pin of U1. Connect an ammeter between pin1 and 2 to measure the current consumption of U1.       |
| JU8      | 1-2              | System V CC powers U2 V CC pin.                                                                            |
| JU8      | OPEN*            | Floats VCC pin of U2. Connect an ammeter between the pins of JU8 to measure the current consumption of U2. |
| JU10     | 1-2*             | Connects SDApin of U1 and U2 to Mbed/Arduino/PICO platform for GUI control.                                |
| JU10     | OPEN             | Floats SDApin for users' own I 2 C control.                                                                |
| JU11     | 1-2*             | Connects SCL pin of U1 and U2 to Mbed/Arduino/PICO platform for GUI control.                               |
| JU11     | OPEN             | Floats SCL pin for users' own I 2 C control.                                                               |
| JU13     | 1-2*             | Connects power backup selection AIN at JU2 to AIN pin of U1.                                               |
| JU13     | OPEN             | Floats AIN pin of U1 for users' signal input.                                                              |
| JU14     | 1-2              | Connects power backup selection AIN at JU2 to AIN pin of U2.                                               |
| JU14     | OPEN*            | Floats AIN pin of U2 for users' signal input.                                                              |
| JU15     | 1-2              | U2                                                                                                         |
| JU15     | 2-3*             | U1                                                                                                         |

Evaluates: MAX31341B/MAX31341C

## Jumper Settings for Testing TDFN IC

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                |
|----------|------------------|------------------------------------------------------------------------------------------------------------|
| JU2      | 1-2              | Connects AIN to VBAT at TP2.                                                                               |
| JU2      | 1-3              | Connects AIN to GND.                                                                                       |
| JU2      | 1-4*             | Connects AIN to supercapacitor.                                                                            |
| JU4      | 1-2*             | System V CC ** is powered by VCC_EXT at TP5.                                                               |
| JU4      | 2-3              | System V CC powered by +3.3V supply from Mbed/Arduino/PICO platform.                                       |
| JU6      | 1-2              | Connects INTA /CLKIN pin of U2 to ground.                                                                  |
| JU6      | 1-3*             | Connects INTA /CLKIN pin of U2 to Mbed/Arduino/PICO platform through a level translator (U5).              |
| JU6      | 1-4              | Connects INTA /CLKIN pin of U2 to test point TP3 with a 10kΩ pullup resistor to system V CC .              |
| JU7      | 1-2              | System V CC connects to VCC pin of U1.                                                                     |
| JU7      | OPEN*            | Float VCC pin of U1. Connect an ammeter between pin1 and 2 to measure the current consumption of U1.       |
| JU8      | 1-2*             | System V CC powers U2 V CC pin.                                                                            |
| JU8      | OPEN             | Floats VCC pin of U2. Connect an ammeter between the pins of JU8 to measure the current consumption of U2. |
| JU10     | 1-2*             | Connects SDApin of U2 to Mbed/Arduino/PICO platform for GUI control.                                       |
| JU10     | OPEN             | Floats SDApin for users' own I 2 C control.                                                                |
| JU11     | 1-2*             | Connects SCL pin of U2 to Mbed/Arduino/PICO platform for GUI control.                                      |
| JU11     | OPEN             | Floats SCL pin for users' own I 2 C control.                                                               |
| JU13     | 1-2              | Connects power backup selection AIN at JU2 to AIN pin of U1.                                               |
| JU13     | OPEN*            | Floats AIN pin of U1 for users' signal input.                                                              |
| JU14     | 1-2*             | Connects power backup selection AIN at JU2 to AIN pin of U2.                                               |
| JU14     | OPEN             | Floats AIN pin of U2 for users' signal input.                                                              |
| JU15     | 1-2*             | U2                                                                                                         |
| JU15     | 2-3              | U1                                                                                                         |

Evaluates: MAX31341B/MAX31341C

│

## Component Suppliers

| SUPPLIER             | WEBSITE                            |
|----------------------|------------------------------------|
| Murata               | http://www.murata.com/             |
| Yageo                | http://www.yageo.com/              |
| Eaton                | http://www.eaton.com/              |
| Amphenol FCI         | http://www.fci.com/                |
| Samtec               | https://www.samtec.com/            |
| TE Connectivity      | http://www.te.com/usa-en/home.html |
| Keystone Electronics | http://www.keyelco.com/            |
| ECS                  | https://www.ecsxtal.com/           |
| ON Semiconductor     | http://www.onsemi.com/             |

Note: Indicate that you are using the MAX31341 when contacting these component suppliers.

## Ordering Information

| PART NUMBER   | TYPE   |
|---------------|--------|
| MAX31341SHLD# | EV Kit |

# Denotes RoHS compliant.

## MAX31341 Shield EV Kit Bill of Materials

|   ITEM | REF_DES             | DNI/DNP   |   QTY | MFG PART #                                                                                                                                                                                                          | MANUFACTURER                                                                                                                                   | VALUE          | DESCRIPTION                                                                                |
|--------|---------------------|-----------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|----------------|--------------------------------------------------------------------------------------------|
|      1 | C2, C7, C8, C15     | -         |     4 | CL05B105KQ5NQNC; GRM155R70J105KA12                                                                                                                                                                                  | SAMSUNG ELECTRONICS; MURATA                                                                                                                    | 1µF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 6.3V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R  |
|      2 | C3, C5, C9, C16-C18 | -         |     6 | CL05B104KQ5NNN                                                                                                                                                                                                      | SAMSUNG                                                                                                                                        | 0.1µF          | CAP; SMT (0402); 0.1µF; 10%; 6.3V; X7R; CERAMIC CHIP ;                                     |
|      3 | C4, C11, C13, C19   | -         |     4 | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; CGA2B1X7R1C104K050BC; GCM155R71C104KA55; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK;AMERICAN TECHNICAL CERAMICS; AVK;TDK;MURATA; VENKEL LTD.;SAMSUNG ELECTRONICS; MURATA; TDK; YAGEO PHICOMP; TAIYO YUDEN; SAMSUNG ELECTRONICS | 0.1µF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R |
|      4 | C10, C12, C14, C20  | -         |     4 | C0402C103J3RAC                                                                                                                                                                                                      | KEMET                                                                                                                                          | 0.01µF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 25V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R |
|      5 | J1, J2              | -         |     2 | 75915-310LF                                                                                                                                                                                                         | FCI CONNECT                                                                                                                                    | 75915-310LF    | CONNECTOR; FEMALE; THROUGH HOLE; STRAIGHT; 10PINS                                          |
|      6 | J3                  | -         |     1 | SSQ-110-04-G-S                                                                                                                                                                                                      | SAMTEC                                                                                                                                         | SSQ-110-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;                 |
|      7 | J4                  | -         |     1 | SSQ-106-03-G-S                                                                                                                                                                                                      | SAMTEC                                                                                                                                         | SSQ-106-03-G-S | CONNECTOR; MALE; THROUGH HOLE; THROUGH-HOLE .025 SQ POST SOCKET ; STRAIGHT; 6PINS          |

## MAX31341 Shield EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                          | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER                      | VALUE          | DESCRIPTION                                                                                                                   |
|--------|----------------------------------|-----------|-------|-----------------------------------|-----------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|
| 8      | J6                               | -         |     1 | SSQ-108-03-G-S                    | SAMTEC                            | SSQ-108-03-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                                                       |
| 9      | J7                               | -         |     1 | SSQ-108-04-G-S                    | SAMTEC                            | SSQ-108-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS ;                                                     |
| 10     | JU2, JU6                         | -         |     2 | TSW-104-07-L-S                    | SAMTEC                            | TSW-104-07-L-S | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                             |
| 11     | JU4, JU15                        | -         |     2 | PEC03SAAN                         | SULLINS                           | PEC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                     |
| 12     | JU7, JU8, JU10, JU11, JU13, JU14 | -         |     6 | PBC02SAAN                         | SULLINS ELECTRONICS CORP.         | PBC02SAAN      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65°C TO +125°C;                                        |
| 13     | R3, R7-R9                        | -         |     4 | CRCW040210K0FK; RC0402FR-0710KL   | VISHAY DALE; YAGEO PHICOMP        | 10K            | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                          |
| 14     | R6                               | -         |     1 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP; VENKEL LTD.        | 0              | RESISTOR; 0402; 0 Ω ; 5%; JUMPER; 0.063W; THICK FILM                                                                          |
| 15     | R10                              | -         |     1 | ERJ-2GEJ103                       | PANASONIC                         | 10K            | RESISTOR; 0402; 10KΩ; 5%; 200PPM; 0.10W; THICK FILM                                                                           |
| 16     | SUPER-C                          | -         |     1 | KW-5R5C334-R                      | EATON POWERING BUSINESS WORLDWIDE | 0.33F          | CAP; THROUGH HOLE-RADIAL LEAD; 0.33F; +80%/-20%; 5.5V; ALUMINUM-ELECTROLYTIC ;                                                |
| 17     | SW1                              | -         |     1 | AYZ0202AGRLC                      | C&K COMPONENTS                    | AYZ0202AGRLC   | SWITCH; DPDT; SMT; 12V; 0.1A; MINIATURE SLIDE SWITCHES; RCOIL = 0.08Ω; RINSULATION=100MOHM                                    |
| 18     | TP1-TP3, TP5                     | -         |     4 | 5010                              | KEYSTONE                          | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
| 19     | TP4, TP6                         | -         |     2 | 5011                              | KEYSTONE                          | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 20     | U1                               | -         |     1 | MAX31341BEWC+                     | MAXIM                             | MAX31341BEWC+  | IC; RTC; LOW-CURRENT; REAL-TIME CLOCK WITH I2C INTERFACE AND POWER MANAGEMENT; WLP12 ;                                        |
| 21     | U2                               | -         |     1 | MAX31341C                         | MAXIM                             | MAX31341C      | EVKIT PART - IC; MAX31341C; PACKAGE OUTLINE DRAWING: 21-0137; LAND PATTERN DRAWING: 90-0061                                   |
| 22     | U3, U4                           | -         |     2 | MAX14689AETB+                     | MAXIM                             | MAX14689AETB+  | IC; ASW; ULTRA-SMALL LOW-RON BEYOND-THE-RAILS DPDT ANALOG SWITCHES; TDFN10-EP                                                 |
| 23     | U5, U6                           | -         |     2 | NLSX4373MUTAG                     | ON SEMICONDUCTOR                  | NLSX4373MUTAG  | IC; TRANS; 2-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; UDFN8                                                                  |
| 24     | Y1, Y2                           | -         |     2 | ECS-.327-6-12                     | ECS INC                           | 32.768KHZ      | CRYSTAL; SMT 2.0 MMX1.2 MM; 6PF; 32.768KHZ; ± 20PPM; -0.03PPM/°C2                                                             |
| 25     | PCB                              | -         |     1 | MAX31341SHIELD                    | MAXIM                             | PCB            | PCB:MAX31341SHIELD                                                                                                            |
| 26     | C1, C6                           | DNP       |     0 | TAJC106K016RNJ                    | AVX                               | 10µF           | CAPACITOR; SMT (6032); TANTALUM CHIP; 10µF; 16V; TOL = 10%; MODEL = TAJ SERIES; TG = -55°C TO +125°C                          |
| 27     | R1, R2, R5                       | DNP       |     0 | ERJ-2GEJ103                       | PANASONIC                         | 10K            | RESISTOR; 0402; 10K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                                         |
| 28     | R4                               | DNP       |     0 | N/A                               | N/A                               | OPEN           | PACKAGE OUTLINE 0402 RESISTOR                                                                                                 |
| TOTAL  |                                  |           |    57 |                                   |                                   |                |                                                                                                                               |

│

## MAX31341 Shield EV Kit Schematic Diagram

Figure 6. MAX31341 Shield EV Kit Schematic

<!-- image -->

## MAX31341 Shield EV Kit PCB Layout Diagrams

MAX31341 Shield EV Kit-Assembly Top

<!-- image -->

MAX31341 Shield EV Kit-PCB Top Layer

<!-- image -->

│

## MAX31341 Shield EV Kit PCB Layout Diagrams (continued)

MAX31341 Shield EV Kit-PCB Bottom Layer

<!-- image -->

MAX31341 Shield EV Kit-PCB Bottom Silkscreen

<!-- image -->

│

## MAX31341 Shield Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/18            | Initial release                                                                                                            | -               |
|                 1 | 2/19            | Updated data sheet figures, BOM, and PCB layout diagrams                                                                   | 1-12            |
|                 2 | 3/19            | Updated title to include MAX31341B, updated BOM and schematic                                                              | 1-12            |
|                 3 | 5/19            | Updated Procedure section and added Jumper Settings table                                                                  | 2, 8            |
|                 4 | 4/20            | Updated throughout to add Shield and MAX31341C; updated all sections, figures, tables, BOM, schematic, and layout diagrams | 1-12            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX31341B/MAX31341C