<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8969 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX8969 IC. The IC is a simple 1A step-up converter in a small package that can be used in any single-cell Li-ion application. This IC provides protection features such as input undervoltage lockout, short circuit, and overtemperature shutdown.

The IC transitions to skip mode seamlessly under lightload  conditions  to  improve  efficiency.  Under  these conditions, switching occurs only as needed, reducing switching  frequency  and  supply  current  to  maintain high efficiency.

For  higher  efficiency  when  input  voltage  is  closer  to  the output voltage, two special modes of operation are available: track and automatic track. These modes allow users to  balance  quiescent  current  (IQ)  vs.  transient  response time  into  boost  mode.  In  both  modes,  the  p-channel MOSFET acts as a current-limited switch such that VOUT follows VIN. However, in track mode, the boost circuits are disabled and the system controls the boost function with the EN, TREN inputs (IQ = 30μA). In automatic track mode (ATM),  the  boost  circuits  are  enabled  and  the  device automatically transitions into boost mode when VIN falls to 95% of the target VOUT (IQ = 60μA).

| DESIGNATION   |   QTY | DESCRIPTION                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K Murata GRM155R60J105K            |
| C2*           |     1 | 330 F F Q 20%, 10V X5R tantalum capacitor (R Case) Vishay Sprague 595D337X0010R2T                  |
| C3            |     1 | 22 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BBJ226MA Samsung CL10A226MQ8NRNE |
| C4            |     1 | 10 F F Q 20%, 6.3V X5R ceramic capacitor (0402) Taiyo Yuden JMK105CBJ106MV                         |

## MAX8969 Evaluation Kit Evaluates: MAX8969

Features

- S Compact Layout, Small External Components
- S Up to 1A Output Current
- S 2.5V to 5.5V Input Voltage Range
- S Over 90% Efficiency with Internal Synchronous Rectifier
- S 1A Current-Limited Track Mode
- S Automatic Track Mode
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| C5            |     1 | 22 F F Q 10%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J226K       |
| JU1, JU2      |     2 | 3-pin headers, 0.1in centers Digi-Key S1012E-36-ND                       |
| L1            |     1 | 1 F H, 1.35A, 85m I inductor (2.5mm x 2.0mm x 1.2mm) TOKO MDT2520-CN1R0M |
| U1**          |     1 | Step-up converter for handheld applications (9 WLP) Maxim MAX8969EWL37+T |
| -             |     1 | PCB: MAX8969EVKIT#                                                       |

## Procedure

The EV kit is a fully assembled and tested surface-mount board. Use the steps below to set up and verify the IC and board operation:

- 1) Verify that the jumpers on the EV kit are configured as shown in Table 1.
- 2) Set the electronic load to 1A and turn off.
- 3) Set the power supply (PS1) to 2.6V and turn off.
- 4) Connect  the  test  fixture  cable  VIN  to  the  positive terminal of PS1.
- 5) Connect the test fixture cable GND to the negative terminal of PS1.
- 6) Connect the positive  terminal  of  DMM1  to  the  test fixture cable VIN.
- 7) Connect the negative terminal of DMM1 to the test fixture cable GND.
- 8) Connect the test fixture cable VOUT to the postive terminal of the electronic load.
- 9) Connect the test fixture cable GND1 to the negative terminal of the electronic load.
- 10)  Connect the  positive  terminal  of  DMM2  to  the  test fixture cable VOUT.
- 11)  Connect the negative terminal of DMM2 to the test fixture cable GND1.
- 12)  Go to the EV Kit Test Procedure section and follow the procedure.

## MAX8969 Evaluation Kit Evaluates: MAX8969

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                         | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-6100 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |
| Vishay                                 | 402-563-6325 | www.vishay.com              |

Note:

Indicate that you are using the MAX8969 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX8969 EV kit
- 6V, 3A power supply (PS1)
- Two digital multimeters (DMM1, DMM2)
- 1A electronic load
- User-supplied cables

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   |
|----------|--------------------------|
| JU1      | 1-2                      |
| JU2      | 1-2                      |

## EV Kit Test Procedure

- 1) Turn on the power supply (PS1).
- 2) Verify  that  the  voltage  read  by  DMM1  is  approximately 2.6V.
- 3) Verify  that  the  voltage  read  by  DMM2  is  approximately 3.7V.
- 4) Sweep  PS1  down  to  2.5V.  Verify  that  the  voltage read by DMM2 is approximately 3.7V.
- 5) Turn on the electronic load.
- 6) Verify  that  the  voltage  read  by  DMM2  is  approximately 3.47V.
- 7) Sweep PS1 up to 3.2V. Verify that the voltage read by DMM2 is approximately 3.51V.
- 8) Turn off electronic load.
- 9) Switch jumpers JU1 and JU2 from pins 1-2 to 2-3 to shut down the part.
- 10)  Switch JU2 from pins 2-3 to 1-2.
- 11)  Set the power supply (PS1) to 3.6V and verify that the voltage read by DMM1 is approximately 3.6V.
- 12)  Verify  that  the  voltage  read  by  DMM2  is  approximately 3.6V.
- 13)  Turn on the electronic load.
- 14)  Verify  that  the  voltage  read  by  DMM2  is  approximately 3.43V
- 15)  Sweep PS1 up to 5.5V. Verify that the voltage read by DMM2 is approximately 5.36V.
- 16)  After completion, switch JU1 and JU2 from pins 1-2 to 2-3.
- 17)  Disconnect all test leads from the EV kit. Testing is complete.

## Detailed Description of Hardware

The  MAX8969  EV  kit  evaluates  the  MAX8969  stepup  DC-DC  switching  converter  that  utilizes  a  fixedfrequency PWM architecture with True Shutdown K . With an  advanced  voltage-positioning  control  scheme  and high  3MHz  switching  frequency,  the  IC  is  inexpensive to  implement and compact using only a few small easily  obtained  external  components.  The  IC  is  highly  efficient  with  an  internal  switch  and  synchronous  rectifier. Shutdown typically reduces the quiescent current to 1μA (typ). Low quiescent current and high efficiency make this device ideal for powering portable equipment.

The  step-up  converter  typically  generates  a  3.7V  output voltage  from  battery  input  voltage  ranging  from  2.5V  to 3.5V.  The  input  current  limit  is  set  to  2.6A  to  guarantee delivery of a 1A, 3.7V output from a 2.5V input supply.

## Automatic Track Mode

Automatic track mode (ATM) is entered when an internal comparator  signals  that  the  input  voltage  has  exceeded the  ATM  threshold.  The  ATM  threshold  is  95%  of  the output-voltage target. At this point, the IC enters automatic track mode, with the pMOS switch turned on, regardless of  the  status  of  the  TREN.  Note  that  EN  must  be  high  to enable ATM mode. This behavior is summarized in Table 2.

## Fault Protection

In  track,  ATM, and boost modes, the IC has protection against overload and overheating.

- In  track  mode/ATM,  current  is  limited  to  prevent excessive  inrush  current  during  soft-start  and  to protect  against  overload  conditions.  If  the  die  temperature  exceeds  +165°C  in  track/ATM  mode,  the switch turns off until the die temperature has cooled to +145°C.
- In boost mode, if the inductor current exceeds 2.6A during  each  3MHz  switching  cycle,  the  n-channel MOSFET is shut off  and  the  p-channel  MOSFET  is switched  on.  The  end  result  is  that  LX  current  is regulated  to  2.6A  or  less.  A  2.6A  inductor  current is a large enough current to guarantee a 1A output load current under all intended operating conditions. The IC can operate indefinitely while regulating the inductor current to 2.6A or less.

However,  if  a  short  circuit  or  extremely  heavy  load  is applied to the output, the output voltage decreases since the inductor current is limited to 2.6A.

If  the output voltage decreases to less than 72% of the regulation voltage target, a short circuit is assumed and the IC returns to the shutdown state.

True Shutdown is a trademark of Maxim Integrated Products, Inc.

## MAX8969 Evaluation Kit Evaluates: MAX8969

## Table 2. Modes of Operation

X = Don't care.

| VIN COMPARATOR   |   EN | TREN   | MODE                 |
|------------------|------|--------|----------------------|
| X                |    0 | 0      | True Shutdown        |
| X                |    0 | 1      | Track                |
| 0                |    1 | 0      | Boost                |
| 0                |    1 | 1      | Boost                |
| 1                |    1 | X      | Automatic track mode |

The  IC  then  attempts  to  start  up  if  the  output  short  is removed.  Even  if  the  output  short  persists  indefinitely, the  IC's  thermal  protection  ensures  that  the  die  is not damaged.

## Evaluating MAX8969 for Output Voltage Other Than 3.7V

The  MAX8969  EV  kit  natively  supports  the  3.7V  output voltage  version  (MAX8969EWL37+),  but  it  can  also be  used  to  evaluate  other  VOUT  options.  To  evaluate other VOUT options, replace the MAX8969 (U1) with the desired output version IC (refer the data sheet's Ordering Information ). No other component changes are required to evaluate parts with output voltage up to 5V, however, for  VOUT  options  higher  than  5V,  the  DC  bias  voltage derating of the output capacitors becomes greater and it is recommended to use C3 = 2x22μF to ensure that the minimum  output  capacitance  for  stability  requirement is met. Note that C3 has a single 0603 land patter so if more output capacitance is required, it is recommended to install one on top of the other.

## True Shutdown

During operation in boost mode, the p-channel MOSFET prevents  current  from  flowing  from  OUT\_  to  LX\_.  In  all other  modes  of  operation,  it  is  desirable  to  block  current flowing from LX\_ to OUT\_. True Shutdown prevents current  from  flowing  from  LX\_  to  OUT\_  while  the  IC  is shut  down  by  reversing  the  internal  body  diode  of  the p-channel  MOSFET.  This  feature  is  also  active  during track  mode,  allowing  current  limit  to  function  as  anticipated.

Upon  leaving  boost  mode,  the  p-channel  MOSFET continues to prevent current from flowing from OUT\_ to LX\_ until OUT\_ and IN are approximately the same voltage. After this condition has been met, track mode and shutdown operate normally.

## Thermal Considerations

In most applications, the IC does not dissipate much heat due to its high efficiency. But in applications where the IC runs at high ambient temperature with heavy loads, the heat dissipated might cause the temperature to exceed the  maximum  junction  temperature  of  the  part.  If  the junction temperature reaches approximately +165°C, the thermal overload protection is activated.

The  IC's  maximum  power  dissipation  depends  on  the thermal resistance of the IC package and circuit board. The power dissipated (P D ) in the device is:

<!-- formula-not-decoded -->

where E is the efficiency of the converter and P OUT  is the output power of the step-up converter.

The maximum allowed power dissipation is:

<!-- formula-not-decoded -->

where (T JMAX  - T A ) is the temperature difference between the  IC's  maximum  rated  junction  temperature  and  the surrounding  air,  and B JA   is  the  thermal  resistance  of the junction through the PCB, copper traces, and other materials to the surrounding air.

## MAX8969 Evaluation Kit Evaluates: MAX8969

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8969EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX8969 Evaluation Kit Evaluates: MAX8969

Figure 1. MAX8969 EV Kit Schematic

<!-- image -->

Figure 2. MAX8969 EV Kit Component Placement Guide-Component Side

<!-- image -->

## MAX896 Evaluation Kit Evaluates: MAX896

Figure 3. MAX8969 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8969 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX896 Evaluation Kit Evaluates: MAX896

Figure 5. MAX8969 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## MAX8969 Evaluation Kit Evaluates: MAX8969

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 2/12            | Initial release                                                                                             | -               |
|                 1 | 4/16            | Updated General Description section and added Evaluating MAX8969 for Output Voltage Other Than 3.7V section | 1, 3            |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.