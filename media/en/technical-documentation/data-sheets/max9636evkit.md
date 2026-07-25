<!-- lastmod 2022-08-03 -->
## General Description

The  MAX9636  evaluation  kit  (EV  kit)  is  an  assembled and  tested  PCB  used  to  evaluate  the  MAX9636  lowpower, low-noise, CMOS input op amp, which is suitable for  photodiode  transimpedance  front-ends  in  portable medical  instruments.  The  EV  kit  is  preconfigured  for a  transimpedance  amplifier  (TIA).  Additionally,  an  onboard  LED  driver  circuit  provides  a  controlled  light source to help evaluate the performance of the MAX9636 TIA circuit. The EV kit can easily be adapted to act as noninverting, inverting, or differential amplifier by changing a few components. Another EV kit is offered for the MAX9638 dual version of this op amp to enable evaluation in an active filter circuit configuration.

The EV kit comes with a MAX9636AXT+ installed.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                            |
|----------------|-------|------------------------------------------------------------------------|
| C1             |     1 | 18pF Q 5%, 50V C0G ceramic capacitor (0603) TDK C1608C0G1H180J         |
| C2, C7, C8, C9 |     4 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C3, C6         |     0 | Not installed, ceramic capacitors (0603)                               |
| C4             |     0 | Not installed, ceramic capacitor (0805)                                |
| C5             |     1 | 4.7 F F Q 10%, 25V X5R ceramic capacitor (0805) Murata GRM21BR61E475K  |
| D1             |     1 | Red side LED (4mm x 3.6mm x 4mm) OSRAM LS A676-R1S1                    |

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| D2            |     1 | Photodiode Vishay BPW46                      |
| JU1, JU2      |     2 | 3-pin headers                                |
| M1            |     1 | n-channel MOSFET (6 SC70) Fairchild FDG410NZ |
| R1, R6, R7    |     3 | 0 I Q 5% resistors (0603)                    |
| R2            |     1 | 10k I Q 1% resistor (0603)                   |
| R3, R9, R12   |     0 | Not installed, resistors (0603)              |
| R4            |     1 | 100k I Q 1% resistor (0603)                  |
| R5            |     1 | 249 I Q 1% resistor (0603)                   |
| R8, R10, R11  |     3 | 976 I Q 1% resistors (0603)                  |
| TP1           |     1 | Red test point                               |
| U1, U2        |     2 | Low-power op amps (6 SC70) Maxim MAX9636AXT+ |
| -             |     2 | Shunts                                       |
| -             |     1 | PCB: MAX9636 EVALUATION KIT+                 |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX9636 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9636 Evaluation Kit

## Features

- S Accommodates Multiple Op-Amp Configurations
- S On-Board LED Driver
- S Accommodates Multiple Wavelength LEDs
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9636EVKIT+ | EV Kit |

## MAX9636 Evaluation Kit

## Quick Start

## Required Equipment

- MAX9636 EV kit
- 2.1V to 5.5V DC power supply (e.g., Agilent E3620A)
- Function generator (e.g., Agilent 33220A)
- Digital oscilloscope (e.g., Tektronix TDS3014)

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps  below  to  verify  board  operation. Caution:  Do not  turn  on  power  supply  until  all  connections  are completed.

- 1) Since the photodiode on the EV kit is sensitive to ambient and infrared light, it is recommended that the EV kit be placed in a suitable dark environment to minimize the idling current.
- 2) Verify  that  a  shunt  is  installed  in  the  1-2  position of  both  jumpers  JU1  and  JU2.  See  Table  1  for  a description of the jumper settings.
- 3) Set  the  DC  power  supply  to  5V  and  connect  the positive terminal to the VDD and INP pads on the EV kit. Connect the negative terminal to the GND pad.
- 4) Set  the  function  generator  for  a  square-wave frequency of 1kHz, and amplitude to 2VP-P with a DC offset of 1V.
- 5) Disable the function generator.
- 6) Connect the function generator across the VCONTROL and GND pads on the EV kit.
- 7) Connect an oscilloscope channel across the VOUT and GND pads on the EV kit.
- 8) Turn on the DC power supply.
- 9) Enable the function generator.

## Table 1. Jumper Descriptions (JU1, JU2)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                   |
|----------|------------------|---------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the SHDN pin of the MAX9636 (U1) to VDD for normal operation.                                        |
| JU1      | 2-3              | Connects the SHDN pin of the MAX9636 (U1) to GND to put the part in shutdown mode.                            |
| JU2      | 1-2*             | Powers LED D1 using the supply applied at the VDD pad of the EV kit.                                          |
| JU2      | 2-3              | Powers LED D1 and its LED driver circuit using a separate power supply applied at the VLED pad on the EV kit. |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 10) Verify that the red LED (D1) turns on. At 1kHz, the LED pulsing cannot be seen due to persistence of vision.  Verify  that  the  oscilloscope  screen  shows a  square  waveform  with  an  approximate  1kHz frequency.

## Detailed Description of Hardware

The MAX9636 EV kit is an assembled and tested PCB used to evaluate the MAX9636 low-power op amp, which is suitable for photodiode transimpedance front-ends in portable  medical  instruments.  The  EV  kit  is  preconfigured for a TIA, but can easily be adapted to other topologies by changing a few components.

## Transimpedance Amplifier (TIA)

By default, the EV kit is set up for a TIA. The output voltage of the TIA is the photodiode current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where  R4  comes  installed  as  a  100k I resistor,  IPD  is defined as photodiode current, and VOS is the input offset voltage of the op amp. Use capacitor C1 to stabilize the op amp by rolling off high-frequency gain due to the photodiode capacitance.

For  ease  of  evaluation  of  the  TIA  circuit,  LED  D1  is provided on-board to emit light from the side. A second op amp (U2), MOSFET M1, and resistors R8, R10, and R11  form  a  controlled  current-sink  circuit  to  regulate the  LED  current.  Due  to  the  negative  feedback  action, the voltage at test point TP1 is the same as the control voltage (VCONTROL). The LED current is given by the following equation:

<!-- formula-not-decoded -->

<!-- image -->

Since  the  forward-voltage  drop  across  the  LED  is approximately  2V,  the  applied  control  voltage  ranges from 0V to VDD1 - 2V.

The  silicon  pin  photodiode  (BPW46)  has  a  spectral bandwidth that ranges from 430nm to 1100nm. Hence, the EV kit can also be used with LEDs that range from visible light to infrared light. Table 2 gives a list of LEDs that have the same footprint as installed LED D1, but with different wavelengths. When changing D1, replace R8, R10, R11, and R12 with the appropriate resistor values.

## Noninverting Configuration

The  EV  kit  can  also  be  configured  as  a  noninverting amplifier. Remove D2, R5, C1, and C2 from the EV kit. Replace  R2  with  a  0 I resistor.  The  gain  is  set  by  the ratio of R4 and R1 when a voltage (VINP) is applied at the INP pad and the INM pad is connected to ground by installing 0 I on R9 on the EV kit. The output voltage for the noninverting configuration is given by the following equation:

<!-- formula-not-decoded -->

## Inverting Configuration

The  EV  kit  can  also  be  configured  as  an  inverting amplifier.  Remove  D2,  R2,  R5,  and  R6  from  the  EV kit.  Install  a  0 I resistor  across  R5  and  R3.  Install  the decoupling capacitors between C4 and C6. The board is operated in dual supply ( Q 1.05V to Q 2.75V). The gain is set by the ratio of R4 and R1 when a voltage (VINM) is

## Table 2. List of LEDS With the Same Footprint as D1

| LED MANUFACTURER PART NUMBER   |   WAVELENGTH (nm) | COLOR    |
|--------------------------------|-------------------|----------|
| OSRAM LB A6SG-S1T2-35          |               470 | Blue     |
| OSRAM LT A673-Q1R2-25          |               532 | Green    |
| OSRAM LY A676-R1S2-26          |               587 | Yellow   |
| OSRAM LO A676-R1S2-24          |               606 | Orange   |
| OSRAM LA A676-R1S2-1           |               615 | Amber    |
| OSRAM SFH426                   |               880 | Infrared |
| OSRAM SFH425                   |               950 | Infrared |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9636 Evaluation Kit

applied at the INM pad. The output voltage for the inverting configuration is given by the following equation:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, remove D2 and replace R1, R2, R4, and R5 with the appropriate  resistors.  Remove  or  choose  appropriate  equal capacitors for C1 and C5. When R1 = R2 and R4 = R5, the CMRR of the differential amplifier is determined by matching of ratios R1/R2 and R4/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Shutdown ( SHDN )

The MAX9636 (U1) is operational when a shunt is placed in the 1-2 position on jumper JU1. By placing a shunt in the 2-3 position, U1 is disabled.

## LED Supply

By  default,  the  LED  D1  supply  uses  the  same  supply applied at the VDD pad on the EV kit. To use a separate supply for the LED circuit, move the shunt of jumper JU2 to the 2-3 position and apply a voltage from 2.1V to 5.5V on the VLED pad on the EV kit.

## MAX9636 Evaluation Kit

Figure 1. MAX9636 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX9636 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9636 Evaluation Kit

Figure 3. MAX9636 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9636 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

<!-- image -->

## MAX9636 Evaluation Kit

|    |                 | Revision History   |
|----|-----------------|--------------------|
|  0 | Initial release | -                  |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->