<!-- lastmod 2022-08-03 -->
## MAX4205 Evaluation Kit

## General Description

The  MAX44205  evaluation  kit  (EV  kit) provides a proven design to evaluate the MAX44205, low-noise, lowdistortion fully differential operational amplifier (op amp), suitable for driving high-resolution SAR ADCs such as the MAX11905 family of devices.

The EV kit PCB comes installed with a MAX44205ATC+ in a 12-pin, 3mm x 3mm TQFN package with an exposed pad.

## Benefits and Features

- Fully Differential Amplifier with 130dBc THD
- +2.7V to +13.2V Supply Voltage Range
- Output-Voltage Clamps to Prevent Overranging ADC
- Adjustable Output Common-Mode Voltage
- Evaluate 20-Bit SAR ADC + MAX44205 Amplifier (refer to the MAX11905 EV Kit)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX4205

## Quick Start

## Required Equipment

- MAX44205 EV kit
- ±5V, 100mA dual DC power supply
- Low-distortion differential-output signal generator (i.e., Audio Precision 2700, Stanford Research DS360)
- 2-channel oscilloscope
- Two SMA cables of equal length

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation:

- 1) Verify that all shunts are in their default positions, as shown in Table 1.
- 2) Connect the ±5V supply to the VS+, VS-, and GND test points, respectively.
- 3) Use the SMA cables and connect the 10kHz, 6.6Vp-p sine, differential input from the signal generator to the INP and INM SMAs on the EV kit.
- 4) Turn on the power supplies.
- 5) Use the oscilloscope and monitor the differential output at jumper JU6.

<!-- image -->

## MAX44205 Evaluation Kit

Table 1. Jumper Functions (Ju1-Ju5)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                |
|----------|------------------|--------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Normal operation                                                                           |
| JU1      | 2-3              | SHDN . MAX44205 is in shutdown mode.                                                       |
| JU2      | 1-2*             | VCLPH is connected to VS+.                                                                 |
| JU2      | 2-3              | External VCLPH. Apply a voltage no greater than (VS+) + 0.42V at the EXT_VCLPH test point. |
| JU3      | 1-2*             | VCLPL is connected to VS-.                                                                 |
| JU3      | 2-3              | External VCLPL. Apply a voltage no greater than (VS-) + 0.54V at the EXT_VCLPL test point. |
| JU4      | Not installed    | User-supplied VOCM. Apply (VS-) + 1.2V to (VS+) - 1.2V at the VOCM test point.             |
| JU4      | Installed*       | VOCM is connected to GND.                                                                  |
| JU5      | Not installed*   | Disconnects VS- from GND.                                                                  |
| JU5      | Installed        | Connects VS- to GND.                                                                       |

Note:

Jumper JU6 has no shunt; it is used for probing only.

## Detailed Description of Hardware

The  MAX44205  EV  kit  provides  a  proven  design  to evaluate  the  MAX44205,  low-noise,  low-distortion,  fully differential op amp, suitable for driving highresolution  SAR ADCs  such  as  the  MAX11905  family  of devices. Features of the EV kit include jumpers for SHDN control,  VCLPH/VCLPL  voltage-clamping  options,  and input for output common-mode voltage (VOCM). The EV kit is meant to work using dual supplies where the voltage between VS+ and VS- is +2.7V to +13.2V.

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown mode of the device. The  device  is  in  normal  operation  when  the  shunt  is installed  in  the  1-2  position  on  jumper  JU1.  To  place the device in shutdown mode, install a shunt in the 2-3 position  on  JU1.  If  the  shunt  on  JU1  is  removed,  the device is pulled internally to VS+. This option also allows a pulse to be sent through the SHDN SMA.

## Clamping Voltage (VCLPH and VCLPL)

Jumpers  JU2  and  JU3  allow  the  options  to  connect  to the VS+ and VS- supply rails or external supplies (Table 1). When the device is driving an ADC, connect VCLPH to  the  reference  voltage  of  the ADC  and  VCLPL  to  the minimum input voltage (or ground).

## Output Common-Mode Voltage (VOCM)

Jumper  JU4  sets  the  output  common-mode  voltage  to 0V.  If  the  shunt  is  removed,  apply  the  desired  output

Evaluates: MAX44205

common-mode voltage from (VS-) + 1.2V to (VS+) - 1.2V at the VOCM test point.

## Adjusting the Gain

Adjust  the  gain  by  replacing  R1-R4  on  the  EV  kit  with appropriate resistors. The gain (A V ) is as follows:

<!-- formula-not-decoded -->

When selecting resistors, use 0.1% tolerance and 10ppm parts when possible.

## Input Termination Resistors

The EV kit has 49.9Ω termination resistors populated at the  R7  and  R8  pads  at  the  IN+  and  IN-  inputs.  These resistors should be removed or replaced appropriately to match the impedance of the signal source.

## Input Filter for ADC

Replace  R5,  R6,  and  populate  C12  appropriately  when driving a high-resolution  ADC  like  the  MAX11905. Additional  capacitance  can  be  installed  at  the  C17  and C18  pads.  Refer  to Driving  a  Fully  Differential  ADC section in the MAX44205 IC data sheet.

## Component List

Refer  to  file  'evkit\_build\_bom\_max44205\_evkit\_a.csv' attached to this PDF for component information.

Figure 1. MAX44205 EV Kit Schematic

<!-- image -->

Figure 2. MAX44205 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX44205 EV Kit PCB Layout-Component Side

<!-- image -->

## Evaluates: MAX44205

Figure 4. MAX44205 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX44205 EV Kit Component Placement GuideSolder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44205EVKIT# | EV Kit |

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserYes the riJht to FhanJe the FirFuitr\ and speFi¿Fations Zithout notiFe at an\ time.

Evaluates: MAX44205