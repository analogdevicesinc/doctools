<!-- lastmod 2022-08-03 -->
## MAX40242 Evaluation Kit

## General Description

The MAX40242 evaluation kit (EV kit) provides a proven design to evaluate the MAX40242 low-input bias current, low-noise  operational  amplifier  (op  amp)  in  an  8-pin µMAX ®   package.  The  EV  kit  circuit  is  preconfigured as  noninverting  amplifiers,  but  can  be  adapted  to  other topologies by changing a few components. The component pads accommodate 0805 packages, making them easy to solder and replace. The EV kit comes with a MAX40242ANA+ installed.

## Features

- Accommodates Multiple Op-Amp Configurations
- Rail-to-Rail Outputs
- Accommodates Easy-to-Use 0805 Components
- 2.7V to 20V Single Supply or ±1.35V to ±10V Dual Supplies
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX40242 EV Kit Photo

<!-- image -->

μMAX is a registered trademark of Maxim Integrated Products, Inc.

Evaluates: MAX40242

## Quick Start

## Required Equipment

- MAX40242 EV kit
- +5V, 10mA DC power supply (PS1)
- Two precision voltage sources
- Two digital multimeters (DMMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power  supplies  until  all  connections  are  completed and  turn  on  V DD ,  V SS   supplies  before  turning  on voltage sources on the input pins.

- 1)  Verify that the jumpers are in their default position, as shown in Table 1.
- 2)  Connect the positive terminal of the +5V supply to V DD and the negative terminal to GND test points.
- 3)  Connect the positive terminal of the precision voltage source to INAP. Connect the negative terminal of the precision voltage source to GND.

<!-- image -->

## MAX40242 Evaluation Kit

- 4)  Connect the positive terminal of the second precision voltage source to the INBP pad. Connect the negative terminal of the precision voltage source to GND.
- 5)  Connect  the  Multimeters  to  monitor  the  voltages  on OUTA  and  OUTB.  With  the  9kΩ  feedback  resistors and 1kΩ series resistors, the gain of each noninverting amplifier is +10V/V.
- 6)  Turn on the +5V power supply.
- 7)  Apply  100mV  from  the  precision  voltage  sources. Observe the output at OUTA and OUTB on the DMMs. Both should read approximately +1V.
- 8)  Apply 450mV from the precision voltage sources. Both OUTA and OUTB should read approximately +4.5V.

Once the above steps are confirmed, the EV kit is tested for functionality.

## Table 1. Jumper Descriptions (JU1-JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                      |
|----------|------------------|------------------------------------------------------------------|
| JU1      | Installed*       | Terminating Inverting input of CHA to GND through Gain Resistor  |
| JU1      | Not Installed    | Floating Inverting input of CHA to GND through Gain Resistor     |
| JU2      | Installed*       | For Non-Inverting configuration of CHA, apply Input on INAP      |
| JU2      | Not Installed    | Floating Non-Inverting input of CHA Resistor                     |
| JU3      | 1-2*             | For Non-Inverting configuration on CHA                           |
| JU3      | 2-3              | Terminating Non-Inverting input of CHA to GND                    |
| JU4      | Install*         | Jumper to pass on signal from OUTA pin of CHA to OUTA test point |
| JU4      | Not Installed    | No signal on OUTA test point from OUTA pin                       |
| JU5      | Installed*       | Terminating Inverting input of CHB to GND through Gain Resistor  |
| JU5      | Not Installed    | Floating Inverting input of CHB to GND through Gain Resistor     |
| JU6      | Installed*       | For Non-Inverting configuration of CHB, apply Input on INBP      |
| JU6      | Not Installed    | Floating Non-Inverting input of CHB                              |
| JU7      | 1-2*             | For Non-Inverting configuration on CHB                           |
| JU7      | 2-3              | Terminating Non-Inverting input of CHB to GND                    |
| JU8      | Install*         | Jumper to pass on signal from OUTB pin of CHB to OUTB test point |
| JU8      | Not Installed    | No signal on OUTB test point from OUTB pin                       |
| JU9      | Install*         | Single-supply operation                                          |
| JU9      | Not Installed    | Float V SS pin to enable Split-supply operation                  |

## Evaluates: MAX40242

## Detailed Description of Hardware

The MAX40242 EV kit provides a proven layout for the MAX40242 low input bias current, low-noise dual op amp.

The  IC  is  a  single-supply  dual  op  amp  whose  primary application is operating in the noninverting configuration; however, the IC can operate with a dual supply as long as the voltage across the V DD  and GND pins of the IC do not exceed the absolute maximum ratings. When operating with a single supply, short V SS  to GND.

## Op-Amp Configurations

The IC is a single-supply dual op amp ideal for differential sensing,  noninverting  amplification,  buffering,  and  filtering. A few common configurations are shown in the next few sections.

The following sections explain how to configure one of the device's op amps (op-amp A). To configure the device's second op amp (op-amp B), the same equations can be used after modifying the component reference designators. For  op-amp  B,  the  equations  should  be  modified  by

│

## MAX40242 Evaluation Kit

adding 10 to the number portion of the reference designators (e.g., for the noninverting configuration, equation R1 becomes R11 and R5 becomes R15).

## Noninverting Configuration

The  EV  kit  comes  preconfigured  as  a  noninverting amplifier. The gain is set by the ratio of R5 and R1. The EV  kit  comes  preconfigured  for  a  gain  of  10V/V.  The output voltage for the noninverting configuration is given by the equation below:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the EV kit as a differential amplifier, replace R1-R3, and R5 with appropriate resistors.  When R1 = R2 and R3 = R5, the CMRR of the differential amplifier is  determined by the matching of the resistor ratios R1/ R2 and R3/R5.

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

## Sallen-Key Filter Configuration

The Sallen-Key filter topology is ideal for filtering sensor signals with a second-order filter and acting as a buffer. Schematic complexity is reduced by combining the filter and buffer operations. The EV kit can be configured in a Sallen-Key  topology  by  replacing  and  populating  a  few components. The Sallen-Key topology is typically configured as  a  unity-gain  buffer,  which  can  be  done  by  replacing R1 and R5 with open and 0Ω resistors, respectively and short JU2. The noninverting signal is applied to the INAP test point with JU2 short and short pins 1-2 on JU3 or do the same on the INBP pad similarly. The filter component pads  are  R2-R4,  and  R8,  where  some  have  to  be populated with resistors and others with capacitors. We will go into detail below on these details.

## Lowpass Sallen-Key Filter

To configure the Sallen-Key as a lowpass filter, populate the R2 and R8 pads with resistors, and populate the R3 and R4 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## Highpass Sallen-Key Filter

To configure the Sallen-Key as a highpass filter, populate the R3 and R4 pads with resistors and populate the R2 and R8 pads with capacitors. The corner frequency and Q are then given by:

<!-- formula-not-decoded -->

## Transimpedance Application

To configure op-amp U1-A as a transimpedance amplifier (TIA), replace R1 with photo-diode with bias accordingly and shunt on pins 2-3 on jumper JU3. The output voltage of the TIA is the input current multiplied by the feedback resistor:

<!-- formula-not-decoded -->

where  R4  is  installed  as  a  9kΩ  resistor,  I IN   is  defined as the input current source applied by photo-diode or a current source, I BIAS  is the input bias current, and V OS  is the input offset voltage of the op amp. Use capacitor C8 (and C7, if applicable) to stabilize the op amp by rolling off high-frequency gain due to a large cable capacitance. Similarly, we can configure op-amp U1-B for transimpedance application.

## Capacitive Loads

Some applications require driving large capacitive loads. To improve the stability of the amplifier, replace R6 (R16 for U1-B) with a suitable resistor value to improve amplifier phase margin. The R6/C9 (R16/C19 for U1-B) filter can also  be  used  as  an  anti-alias  filter,  or  to  limit  amplifier output noise by reducing its output bandwidth.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40242EVKIT# | EV Kit |

# Denotes ROHS compliant.

│

## MAX40242 Evaluation Kit

## MAX40242 EV Kit Bill of Materials

| CMNTS                                                                                                   |                                                                                                                                                                                       | (GND1-                                                                                |                                                                                                                       |                                                                                          |                                |                                                                                                              |                                                      |                                                                                                                                                                          |                                                       |                                                                                                                      | -                           |                                                                                |
|---------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|-----------------------------|--------------------------------------------------------------------------------|
| DESCRIPTION                                                                                             | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; -55degC to + 125degC; +/- 15% from -55degC to +125degC; CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO | +85 DEGC; TC=X5R TESTPOINT;PINDIA=0.125IN;TOTALLENGTH=0.445IN;BOARDHOLE=0.063IN;BLACK | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; | -65 DEGC TO +125 DEGC CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; | -65 DEGC TO +125 DEGC          | RESISTOR; 0603; 1K OHM; 0.1%; 25PPM; 0.10W; THICK FILM RESISTOR, 0603, 909OHMS, 1%, 100PPM, 0.1W, THICK FILM | RESISTOR; 0603; 9K OHM; 0.01%; 5PPM; 0.1W; THIN FILM | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; BRONZE CONTACT=GOLD POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD | TEST INSULATION=PBT;PHOSPHOR PLATED TEST HOLE=0.04IN; | RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; EVKIT PART - IC; OPAMP; MAX40242; PACKAGE OUTLINE DRAWING: 21-100280; | PACKAGE CODE: N80D1+1; WLP8 | PCB:MAX PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR PACKAGE OUTLINE 0603 RESISTOR |
| VALUE                                                                                                   | 0.1UF                                                                                                                                                                                 | 4.7UF                                                                                 | N/A                                                                                                                   | PCC02SAAN                                                                                | PCC03SAAN                      | 1K 909                                                                                                       | 9K                                                   | 0                                                                                                                                                                        | SX1100-B                                              | N/A                                                                                                                  | MAX40242                    | PCB OPEN OPEN                                                                  |
| MFG                                                                                                     | KEMET; MURATA; TDK                                                                                                                                                                    | TDK; MURATA                                                                           | KEYSTONE                                                                                                              | SULLINS                                                                                  | SULLINS VISHAY DALE; SUSUMU CO | LTD. VISHAY DALE                                                                                             | RIEDON INC                                           | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH                                                                                                                                    | KYCON; KYCON                                          | KEYSTONE                                                                                                             | MAXIM                       | MAXIM N/A N/A                                                                  |
| QTY MFG PART # C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K C1608X5R1E475K080AC; GRM188R61E475KE11 | 2                                                                                                                                                                                     | 2                                                                                     | 8 5010                                                                                                                | 7 PCC02SAAN                                                                              | 2 PCC03SAAN TNPW06031K00BE;    | 2 RG1608P-102-B 2 CRCW0603909RFK                                                                             | 2 CAR0603 9K OHMS 0.01% 5PPM HP                      | 8 RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                                                                                                         | 8 S1100-B;SX1100-B                                    | 10 5000                                                                                                              | MAX40242                    | 1 1 MAX 0 N/A 0 N/A 59                                                         |
| DNI/D NP                                                                                                | -                                                                                                                                                                                     | -                                                                                     | -                                                                                                                     | -                                                                                        | -                              | - -                                                                                                          | -                                                    | -                                                                                                                                                                        | -                                                     | -                                                                                                                    | -                           | - DNP DNP                                                                      |
| REF_DES                                                                                                 | C1, C3                                                                                                                                                                                | C2, C4                                                                                | INAM, INAP, INBM, INBP, OUTA, OUTB, VDD, VSS JU1, JU2, JU4-JU6, JU8,                                                  | JU9                                                                                      | JU3, JU7                       | R1, R11 R2, R12                                                                                              | R5, R15                                              | R6, R8-R10, R16, R18-R20                                                                                                                                                 | SU1-SU8                                               | TP1-TP10                                                                                                             | U1                          | PCB C6-C10, C16-C20 R3, R4, R7, R13, R14, R17                                  |
| ITEM                                                                                                    | 1                                                                                                                                                                                     | 2                                                                                     | 4                                                                                                                     | 5                                                                                        | 6                              | 7 8                                                                                                          | 9                                                    | 10                                                                                                                                                                       | 11                                                    | 12                                                                                                                   | 13                          | 14 15 16 TOTAL                                                                 |

Evaluates: MAX40242

## MAX40242 EV Kit Schematic

<!-- image -->

## MAX40242 EV Kit PCB Layouts

MAX40242 EV Kit Component Placement Guide-Component Side

<!-- image -->

MAX40242 EV Kit PCB Layout-Component Side

<!-- image -->

MAX40242 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/18           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX40242