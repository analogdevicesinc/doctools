<!-- lastmod 2022-08-03 -->
## General Description

The MAX9680 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  that  evaluates the  MAX9680  IC.  The  MAX9680  is  optimized  for  3V portable video applications and is specifically designed to  be  compatible  with  video  encoders  embedded  in application processors with a 0.4VP-P video output. The EV kit operates from a 2.7V to 3.6V single power supply.

The MAX9680 provides an internal fixed gain of 5.2V/V and has an internal 2-pole reconstruction filter that typically has bandwidth (-3dB) of 9MHz and -18dB attenuation at 27MHz. The MAX9680 EV kit accepts a 0.4VP-P input full-scale video signal and provides an output fullscale video signal of 2VP-P (nominal).

<!-- image -->

## MAX9680 Evaluation Kit

## Features

- S Single 2.7V to 3.6V Supply Operation
- S Internal Preset Gain of 5.2V/V
- S Input Range Includes Ground
- S DC-Coupled Inputs and Outputs
- S Enable Input
- S Fully Assembled and Tested
- S Lead(Pb)-Free and RoHS Compliant

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9680EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C2            |     1 | 10 F F Q 20%, 6.3V X7R ceramic capacitor (0805) Murata GRM21BR70J106K TDK C2012X7R0J106K |
| IN, OUT       |     2 | 75 I BNC PCB vertical-mount connectors                                                   |

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| JU1, JU2      |     2 | 3-pin headers                                                    |
| JU3, JU4      |     2 | 2-pin headers                                                    |
| R1            |     1 | 75 I Q 1% resistor (0603)                                        |
| R2, R3, R4    |     0 | Not installed, resistors (0603)                                  |
| U1            |     1 | Single-channel video-filter amplifier (6 SC70) Maxim MAX9680AXT+ |
| -             |     1 | PCB: MAX9680 EVALUATION KIT+                                     |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9680 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX9680 Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.7V	to	3.6V,	500mA	DC	power	supply	(VDD)
- Video	signal	generator
- Video-measurement equipment (e.g., Tektronix VM-700T)

## Procedure

The  MAX9680  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)  Connect the power-supply ground to the GND pad on the EV kit.
- 2)  Connect the 2.7V to 3.6V supply to the VDD pad on the EV kit.
- 3)  Connect the output of the video signal generator to the IN BNC connector on the EV kit. The video signal must be approximately 0 to 0.4V.
- 4)  Connect the OUT BNC connector on the EV kit to the input	of	the	video	measurement	equipment.
- 5)  Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU1 (enabled).
- 6)  Verify that a shunt is not installed across jumpers JU2, JU3, and JU4.
- 7)  Set the video signal generator for the desired video input signal.
- 8)  Turn on the power supply and enable the video signal generator.
- 9)  Analyze  the  video  output  signal  with  the  VM-700T video-measurement	equipment.

## Detailed Description of Hardware

The  MAX9680  EV  kit  is  a  fully  assembled  and  tested surface-mount circuit board that evaluates the MAX9680 IC.  The  MAX9680  is  optimized  for  3V  portable  video applications  and  has  an  internal  2-pole  reconstruction filter that smoothes the steps and reduces the spikes on the video signal from the video digital-to-analog converter (DAC). The reconstruction filter typically has a bandwidth (-3dB) of 9MHz and -18dB attenuation at 27MHz.

The MAX9680 provides an internal fixed gain of 5.2V/V. The MAX9680 EV kit accepts a 0.4VP-P input full-scale video signal and provides an output full-scale video signal of 2VP-P (nominal).

Video  input  and  output  signals  from  the  EV  kit  are DC-coupled. The input of the EV kit can be directly connected to the output of a video-current DAC and the EV kit's output has a 75 I back-termination resistor.

## Enable Input

The MAX9680 EV kit incorporates jumper JU1 to control the enable input. When the enable input is set high, the device is enabled. When the enable input is set low, the device enters a low-power shutdown mode. See Table 1 for Jumper JU1 settings.

## Short-Circuit Protection

The  MAX9680  EV  kit  circuit  includes  a  75 I backtermination resistor that limits short-circuit current when an external short is applied to the video output. Jumper JU3 is provided to apply an external short to GND at the output to test this current-limiting feature.

The  MAX9680  also  features  an  internal  output  shortcircuit protection to prevent device damage in prototyping and applications where the amplifier output can be directly  shorted  to  ground.  Jumper  JU2  is  provided  to test the internal output short-circuit protection.

## Input Considerations

The  MAX9680  input  is  DC-coupled.  When  the  supply  voltage  is  between  2.7V  and  3.6V,  the  input-voltage  range  extends  from  ground  to  0.445V.  When  the supply  voltage  is  between  2.8V  and  3.6V,  the  inputvoltage range extends from ground to 0.464V. A typical current-output DAC that operates from a single supply usually creates a composite video signal with a sync tip very  close  to  ground.  Hence,  the  DAC  output  can  be directly connected to the MAX9680 input.

Input  termination  resistor  R2  is  provided,  if  necessary. Jumper JU4 is provided to set the input to GND.

## Output Consideration

The MAX9680 EV kit connects directly to the video cable through a 75 I series back-termination resistor. The other end of the cable should be properly terminated with a 75 I resistor  as  well.  Because of this configuration, the peak-to-peak amplitude, as well as the DC level of the signal, is divided by two. The MAX9680 output signal is level-shifted up so the sync tip is approximately 130mV.

## Table 1. Jumper JU1 Settings

| SHUNT POSITION   | ENABLE PIN       | OUTPUT   |
|------------------|------------------|----------|
| 1-2*             | Connected to VDD | Enabled  |
| 2-3              | Connected to GND | Disabled |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9680 Evaluation Kit

<!-- image -->

Figure 1. MAX9680 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9680 Evaluation Kit

<!-- image -->

Figure 2. MAX9680 EV Kit Component Placement GuideComponent Side

Figure 3. MAX9680 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9680 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4