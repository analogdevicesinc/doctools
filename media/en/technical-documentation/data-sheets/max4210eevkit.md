<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX4210E evaluation kit (EV kit) is a high-side power monitor that operates from a 5V supply voltage and provides a 2.5V output voltage for a 100mV sense voltage. The MAX4210 high-side power monitor provides an analog output voltage proportional to the power consumed by a load by multiplying load current and source voltage. The EV kit is assembled to support a full-scale current measurement of 10A and can monitor up to a 100W power level, which is being delivered by a 10V to 20V source voltage. The MAX4210E uses high-side current sensing; this allows the load to connect directly to ground, eliminating any ground potential errors.

The MAX4210E EV kit is a fully assembled and tested surface-mount printed circuit board. It can be used to evaluate  other  MAX4210  versions:  MAX4210A, MAX4210B, MAX4210C, MAX4210D, and MAX4210F.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                              |
|---------------|-------|------------------------------------------------------------------------------------------|
| C1, C3, C4    |     0 | Not installed, ceramic capacitors (0603)                                                 |
| C2            |     1 | 0.1µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E104K or Murata GRM188R71E104K |
| R1*           |     1 | 0.010 Ω ±1%, 1W sense resistor (2512) IRC LRC-LRF2512-01-R010-F                          |
| R2            |     1 | 2.37M Ω ±1% resistor (0805)                                                              |
| R3            |     1 | 97.6k Ω ±1% resistor (0805)                                                              |
| JU1           |     1 | 3-pin header                                                                             |
| U1            |     1 | MAX4210EETT (6-pin TDFN, 3mm x 3mm) (Top Mark: AHJ)                                      |
| None          |     1 | Shunt                                                                                    |
| None          |     1 | MAX4210E EV Kit PC board                                                                 |

Features

- ♦ Real-Time Power Monitoring
- ♦ Source Voltage Range: 10V to 20V
- ♦ Power-Sense Accuracy: ±1.5%
- ♦ 6-Pin TDFN Package
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE   | IC PACKAGE         |
|----------------|--------------|--------------------|
| MAX4210E EVKIT | 0°C to +70°C | 6 TDFN (3mm x 3mm) |

Note: To  evaluate  the  MAX4210A/B/C/D/F,  request  a MAX4210AETT, MAX4210BETT, MAX4210CETT, MAX4210DETT, or MAX4210FETT free sample with the MAX4210E EV kit.

## Recommended Equipment

- 10V to 20V, 10A power supply (VSOURCE)
- 5V, 1A DC power supply (VCC)
- Electronic load capable of sinking 10A
- Digital voltmeter (DVM)

## Quick Start

The MAX4210E EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  the  shunt  is  across  JU1  pins  1  and  2  to connect the resistor-divider formed by R2 and R3 to pin 2 (IN) of the IC.
- 2) Connect a voltmeter across POUT and GND.
- 3) Connect the positive terminal of the 10V source voltage to the VSOURCE pad. Connect the source ground to the GND pad closest to VCC.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| IRC        | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata     | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK        | 847-390-4373 | 847-390-4428 | www.component.tdk.com |

Note:

Indicate that you are using the MAX4210E when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX4210E Evaluation Kit

- 4) Set the electronic load to sink 10A.
- 5) Connect the electronic load's positive terminal to the LOAD pad. The load's ground should be connected to the GND pad closest to POUT.
- 6) Connect the positive terminal of the 5V supply to the VCC pad, and then connect the negative terminal of the supply to the GND pad closest to VCC.
- 7) Turn on and set the 10V power supply (VSOURCE) to 10V and then activate the electronic load.
- 8) Turn on the 5V power supply and verify that the output voltage POUT = 1.0V.

## Detailed Description

The MAX4210E EV kit is a power monitor that uses highside current sensing to measure load current and provides two options for applying source voltage through an external voltage-divider or as a direct voltage input. When using the latter option, the source voltage may still need to  be divided down by some means to ensure that the voltage applied to the IN input of the MAX4210 does not exceed 1V. The full-scale load current is set at 10A and the source voltage is allowed to swing between 10V and 20V. The EV kit monitors up to 100W of power, which is being delivered to the load by the source voltage.

## Applying the Source Voltage

Jumper JU1 determines how the source voltage is to be applied. Place the shunt across pins 1 and 2 of jumper JU1 to use a divided-down source voltage. The external resistor-divider formed by R2 and R3 provides the voltage division. The second option is to shunt JU1 across pins 2 and 3, allowing the voltage applied to the VIN pad to be used directly. In either configuration, care must be taken not to apply a voltage greater than 1V to the IN input of the MAX4210E. The source voltage should not exceed  28V,  the  full-scale  input  voltage  of  the MAX4210E. Applying any voltages that exceed the EV kit's  full-scale  ratings  results  in  output  voltages  that  are not proportional to the power being delivered to the load. The EV kit is shipped with the shunt placed across pins 1 and 2 of jumper JU1. See Table 1 for JU1 function.

## Table 1. JU1 Function

| SHUNT LOCATION   | IN PIN                                    |
|------------------|-------------------------------------------|
| 1-2 (default)    | Connected to an external resistor-divider |
| 2-3              | Connected to the VIN pad                  |

## Measuring the Load Current

The load current is measured as a voltage drop, VSENSE, across an external sense resistor. To ensure proper load current measurements, the sense resistor must be chosen so that its voltage drop reaches the recommended full-scale sense voltage of the IC. The full-scale  sense  voltage  should be reached when the full-scale load current is being supplied to the load. The external sense resistor R1 is determined by setting the full-scale  load  current  and selecting a full-scale sense voltage of 100mV to 150mV:

<!-- formula-not-decoded -->

The MAX4210E EV kit, which is assembled with the MAX4210E, supports a full-scale sense voltage drop of 100mV, and supports a 10A full-scale load current. This arrangement results in the use of a 10m Ω sense resistor on the MAX4210E EV kit. For different full-scale sense voltage and full-scale load current arrangements, the equation above can be used to determine the appropriate sense resistor value. The full-scale sense voltages of alternate MAX4210 versions can be found in Table 2 of the MAX4210/MAX4211 data sheet.

## Output Power

The output voltage provided at POUT is proportional to the power being delivered to the load:

<!-- formula-not-decoded -->

The voltage measured at POUT is the result of measuring load current and source voltage and taking their product. The load current is measured as a voltage drop, VSENSE, across the current-sense resistor and a divided-down voltage, VIN, is taken as the source voltage measurement. The equation relating VPOUT to the load current and source voltage measurements is given below:

<!-- formula-not-decoded -->

where GP is power gain and equals 25 (1/V):

<!-- formula-not-decoded -->

Refer to Table 2 in the MAX4210/MAX4211 data sheet for the power-gain factor of different MAX4210 versions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4210E Evaluation Kit

Using the above equations, the relationship between the output voltage, VPOUT, and the power being delivered to the load is found to be:

<!-- formula-not-decoded -->

This equation is used to determine the relationship between the output voltage and the amount of power being delivered to the load.

## Evaluating the MAX4210A/B/C/D/F

The MAX4210E EV kit can also be used to evaluate MAX4210A, MAX4210B, MAX4210C, MAX4210D, and MAX4210F. To properly evaluate the different MAX4210 versions, changes will need to be made to the MAX4210E EV kit. The ratio of output voltage to power delivered to the load, as listed in the Output Power section, is applicable when using any of the MAX4210 versions.

## Evaluating MAX4210A/MAX4210B/MAX4210C

To evaluate the MAX4210A/MAX4210B/MAX4210C, replace the MA4210EETT with the MAX4210AETT/ MAX4210BETT/MAX4210CETT, respectively. Remove the shunt from jumper JU1. If a different full-scale load current is needed or a different full-scale sense voltage is used, see the Measuring the Load Current section for details on choosing an appropriate sense resistor. When using the MAX4210A/MAX4210B/MAX4210C, the VIN pad on the EV kit has no function. For proper evaluation do not allow the source voltage to exceed 25V.

## Evaluating MAX4210D and MAX4210F

To evaluate the MAX4210D/MAX4210F, replace the MA4210EETT with the MAX4210DETT/MAX4210FETT. Refer to the MAX4210 IC data sheet for specific information on MAX4210D and MAX4210F. The EV kit can be configured to have the source voltage measurement taken from the external resistor-divider or from the VIN pad. See Table 1 for proper jumper settings. Using R3 = 100k Ω (typ) the external resistor-divider can be configured using the following formula:

<!-- formula-not-decoded -->

where VIN\_FULL-SCALE = 1V.

Depending on the VSOURCE voltage range, adjust the external resistor-divider or the voltage applied to the VIN pad to ensure that the voltage at the IN input of the IC does not exceed 1V. If the full-scale load current or full-scale sense voltage is changed from 10A and 100mV, respectively, then the current-sense resistor value must be changed. See the equation found in the Measuring the Load Current section for details on selecting a new current-sense resistor.

<!-- image -->

Figure 1. MAX4210E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4210E Evaluation Kit

<!-- image -->

Figure 2. MAX4210E EV Kit Component Placement GuideComponent Side

Figure 3. MAX4210E EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX4210E EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600